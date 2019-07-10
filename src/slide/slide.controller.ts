import { Controller, Post, Body, Get, Put, Delete, Param, HttpException, HttpStatus, UseGuards, Request, Response, HttpCode } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { SlideService } from './slide.service';
import { CreateSlideRequest } from './create-slide.request'

@ApiUseTags('Slide')
@Controller('slide')
export class SlideController {
    constructor(private service: SlideService) { }
    @ApiBearerAuth()
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateSlideRequest) {
        try {
            return await this.service.createSlide(request);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.UNPROCESSABLE_ENTITY,
                message: "User taken",
            }, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
