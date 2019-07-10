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
        slide.isActive = params.isActive;
        slide.category = params.category;
        return await this.slideRepository.save(slide);
    }

}
