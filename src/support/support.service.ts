import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Support } from './support.entity';

@Injectable() 
export class SupportService {
    constructor(@InjectRepository(Support) private supportRepository: Repository<Support>) { }
    async createSupport(params: any): Promise<Support> {
        try {
            let support = new Support();
            support.name = params.name 
            support.contact = params.contact 
            support.isActive = params.isActive 
            console.log(params.isActive);
        return await this.supportRepository.save(support);
        } catch (error) {
        throw error;
        }
    }
    async findSupport(condition: any) {
        return await this.supportRepository.findOne(condition);
    }
    async updateSupport(id, params) {
        try {
            let support = await this.findSupport({ id: id });
            support.name = params.name || support.name;
            support.contact = params.contact || support.contact;
            support.isActive = params.isActive || support.isActive;
            return await this.supportRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateSupportActive(id, params) {
        try {
            let support = await this.findSupport({ id: id });
            support.isActive = params.isActive || support.isActive;
            return await this.supportRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
}
