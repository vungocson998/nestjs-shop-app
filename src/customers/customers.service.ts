import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './customers.entity'
import * as bcrypt from 'bcrypt';

export class UserHasExist {
    message = "User taken";
}

@Injectable() 
export class CustomersService {
    constructor(@InjectRepository(Customers) private customersRepository: Repository<Customers>) { }
    async createCustomers(params: any): Promise<Customers> {
        let exist = await this.customersRepository.findOne({ email: params.email });
        console.log('exist', exist);
        if (exist) {
            throw new UserHasExist();
        }
        let customers = new Customers();
        customers.name = params.name;
        customers.adress = params.adress;
        customers.email = params.email;
        customers.password = bcrypt.hashSync(params.password, bcrypt.genSaltSync(10));
        customers.isActive = params.isActive;
        return await this.customersRepository.save(customers);
    }
    async findProducts(condition: any) {
        return await this.customersRepository.findOne(condition);
    }
}
