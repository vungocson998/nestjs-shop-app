import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product_detail } from './product_detail.entity'

@Injectable() 
export class ProductDetailService {
    constructor(@InjectRepository(Product_detail) private productDetailRepository: Repository<Product_detail>) { }
    async createProductDetail(params: any): Promise<Product_detail> {
        let product_detail = new Product_detail();
        product_detail.quantity = params.quantity;
        product_detail.price = params.price;
        product_detail.colors = params.colors;
        product_detail.size = params.size;
        product_detail.isActive = params.isActive;
        product_detail.products = params.products;
        product_detail.media = params.media;
        return await this.productDetailRepository.save(product_detail);
    }
    async findProductDetail(condition: any) {
        return await this.productDetailRepository.findOne(condition);
    }
    async updateProductDetail(id, params) {
        try {
            let product_detail = await this.findProductDetail({ id: id });
            product_detail.quantity = params.quantity || product_detail.quantity;
            product_detail.price = params.price || product_detail.price;
            product_detail.colors = params.colors || product_detail.colors;
            product_detail.size = params.size || product_detail.size;
            product_detail.isActive = params.isActive || product_detail.isActive;
            product_detail.products = params.products || product_detail.products;
            product_detail.media = params.media || product_detail.media;
            return await this.productDetailRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateProductDetailActive(id, params) {
        try {
            let product_detail = await this.findProductDetail({ id: id });
            product_detail.isActive = params.isActive || product_detail.isActive;
            return await this.productDetailRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }

    
    async getProductId(id) {
        return await this.productDetailRepository.find({ relations: ["media","products"], where: { products: { id: id } } });
    }

    async getProductDetailId(id) {
        return await this.productDetailRepository.createQueryBuilder("product_detail")
        .leftJoinAndSelect("product_detail.media","media")
        .where("product_detail.id = :id", { id: id }).getOne();    }

}
