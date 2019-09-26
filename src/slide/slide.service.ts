import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './slide.entity'

@Injectable() 
export class SlideService {
    constructor(@InjectRepository(Slide) private slideRepository: Repository<Slide>) { }
    async createSlide(params: any): Promise<Slide> {
        console.log('params', params);
        let slide = new Slide();
        slide.heading = params.heading;
        slide.content = params.content;
        slide.media = params.media;
        slide.group = params.group;
        slide.category = params.category;
        slide.isActive = params.isActive;
        return await this.slideRepository.save(slide);
    }
    async findSlide(condition: any) {
        return await this.slideRepository.findOne(condition);
    }
    async updateSlide(id, params) {
        try {
            let slide = await this.findSlide({ id: id });
            slide.heading = params.heading || slide.heading;
            slide.content = params.content || slide.content;
            slide.isActive = params.isActive || slide.isActive;
            slide.category = params.category || slide.category;
            slide.media = params.media || slide.media;
            slide.group = params.group || slide.group;
            slide.isActive = params.media || slide.isActive
            return await this.slideRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async updateSlideActive(id, params) {
        try {
            let slide = await this.findSlide({ id: id });
            slide.isActive = params.isActive || slide.isActive;
            return await this.slideRepository.update({ id: id }, params);
        } catch (error) {
            throw error;
        }
    }
    async getSlide() {
        return await this.slideRepository.find({ relations: ["media","category"] });
    }
    async getSlideId(id) {
        return await this.slideRepository.createQueryBuilder("slide")
        .leftJoinAndSelect("slide.media","media")
        .where("slide.id = :id", { id: id }).getOne();
    }
}
