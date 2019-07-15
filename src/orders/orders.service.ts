import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity'

@Injectable() 
export class OrdersService {
    constructor(@InjectRepository(Orders) private ordersRepository: Repository<Orders>) { }
    async createOrders(params: any): Promise<Orders> {
        let orders = new Orders();
        orders.date = params.date;
        orders.total_price = params.total_price
        orders.ship_name = params.ship_name;
        orders.ship_adress = params.ship_adress;
        orders.ship_phone = params.ship_phone;
        orders.isActive = params.isActive;
        orders.customers = params.customers
        console.log(orders);
        return await this.ordersRepository.save(orders);
    }
    async findOrders(condition: any) {
        return await this.ordersRepository.findOne(condition);
    }
    async updateOrders(id, params) {
        try {
            let orders = await this.findOrders({ id: id });
            orders.date = params.date ||  orders.date;
            orders.total_price = params.total_price ||  orders.total_price;
            orders.ship_name = params.ship_name ||  orders.ship_name;
            orders.ship_adress = params.ship_adress || orders.ship_adress;
            orders.ship_phone = params.ship_phone ||orders.ship_phone ;
            orders.isActive = orders.isActive || orders.isActive;
            orders.customers = params.customer || orders.customers;
            return await this.ordersRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateOrdersActive(id, params) {
        try {
            let orders = await this.findOrders({ id: id });
            orders.isActive = params.isActive || orders.isActive;
            return await this.ordersRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }

    async getOrders() {
        return await this.ordersRepository.find();
    }

    async getOrdersId(id) {
        return await this.ordersRepository.findOne(id);
    }
}
