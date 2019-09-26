import { Controller, Post, Body, Get, Put, Param, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { SlideService } from './slide.service';
import { CreateSlideRequest } from './create-slide.request'
import { UpdateSlideRequest } from './detail-slide.request'
import { DetailSlideActive } from './detail-slide-isActive.request'
import { AuthGuard } from '@nestjs/passport';
@ApiUseTags('Slide')
@Controller('slide')
export class SlideController {
    constructor(private service: SlideService) { }
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

    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: UpdateSlideRequest) {
        return this.service.updateSlide(id, params);
    }

    @Put(':id/update_active')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailSlideActive) {
        return this.service.updateSlideActive(id, params);
    }

    @Get('')
    getSlide() {
        return this.service.getSlide();
    }

    @Get(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getSlideId(@Param('id') id: Number) {
        return this.service.getSlideId(id);
    }
}
