import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity'

@Injectable() 
export class ProductsService {


    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>) { }
    async createProducts(params: any): Promise<Products> {
        let products = new Products();
        products.name = params.name;
        products.rate = params.rate;
        products.description = params.description;
        products.isActive = params.isActive
        products.category = params.category;
        return await this.productsRepository.save(products);
    }
    async findProducts(condition: any) {
        return await this.productsRepository.findOne(condition);
    }
    async updateProducts(id, params) {
        try {
            let products = await this.findProducts({ id: id });
            products.name = params.name || products.name;
            products.rate = params.rate || products.rate;
            products.description = params.description || products.description;
            products.isActive = params.isActive ||  products.isActive;
            products.category = params.category || products.category;
            return await this.productsRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateProductsActive(id, params) {
        try {
            let products = await this.findProducts({ id: id });
            products.isActive = params.isActive || products.isActive;
            return await this.productsRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }

    
    async getProducts() {
        return await this.productsRepository.find();
    }
    
    async getProductsId(id) {
        return await this.productsRepository.findOne(id);
    }

    async getCategoryId(id) {
        return await this.productsRepository.find({ relations: ["category"], where: { category: { id: id } } });
    }
    async findProductInCateID(params) {
        const take = params.limit;
        const skip = params.offset;   
        const id = params.id;
        const [result, total] = await this.productsRepository.findAndCount(
            {
                where: { category: { id: id }},
                take: take,
                skip: skip
            }
        );
    
        return {
            data: result,
            count: total
        }
    }
}
