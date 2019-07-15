import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order_detail } from './order_detail.entity'

@Injectable() 
export class OrderDetailService {
    constructor(@InjectRepository(Order_detail) private orderDetailRepository: Repository<Order_detail>) { }
    async createOrderDetail(params: any): Promise<Order_detail> {
        let order_detail = new Order_detail();
        order_detail.quantity = params.quantity;
        order_detail.isActive = params.isActive;
        order_detail.products = params.products;
        order_detail.orders = params.orders;
        return await this.orderDetailRepository.save(order_detail);
    }
    async findOrderDetail(condition: any) {
        return await this.orderDetailRepository.findOne(condition);
    }
    async updateOrderDetail(id, params) {
        try {
            let order_detail = await this.findOrderDetail({ id: id });
            order_detail.quantity = params.quantity || order_detail.quantity;
            order_detail.isActive = params.isActive ||  order_detail.isActive;
            order_detail.products = params.products || order_detail.products;
            order_detail.orders = params.orders || order_detail.orders;
            console.log(order_detail);
            return await this.orderDetailRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateOrderDetailActive(id, params) {
        try {
            let order_detail = await this.findOrderDetail({ id: id });
            order_detail.isActive = params.isActive || order_detail.isActive;
            return await this.orderDetailRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    } 
    async getOrdersId(id) {
        return await this.orderDetailRepository.find({ relations: ["orders"], where: { orders: { id: id } } });
    }

    async getOrderDetailId(id) {
        return await this.orderDetailRepository.createQueryBuilder("order_detail")
        .leftJoinAndSelect("order_detail.products","products")
        .where("order_detail.id = :id", { id: id }).getOne();}   
}
