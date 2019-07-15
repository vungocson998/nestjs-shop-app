import { Controller, Post, Body, Get, Put, Delete, Param, HttpException, HttpStatus, UseGuards, Request, Response, HttpCode } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';
import { CategoriesService } from './categories.service';
import { CreateRequest } from './create-request';
import { DetailRequest } from './detail-request';
import { UpdateRequest } from './update-request';

@ApiBearerAuth()
@ApiUseTags('Categories')
@UseGuards(AuthGuard('jwt'))
@Controller('categories')
export class CategoriesController {
    constructor(private service: CategoriesService) { }
    @Post('add')
    async create(@Request() req: Request, @Body() params: CreateRequest) {
        let user = req['user'];
        let exists = await this.service.findCate(params);
        if (!exists) return await this.service.createCate(user, params);
        throw new HttpException({
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            message: 'This category slug existed!'
        }, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @Get('trees')
    @HttpCode(200)
    async trees(@Response() res) {
        let items = await this.service.findTrees();
        return res.json({ data: { items: items } });
    }

    @Get(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async get(@Param() request: DetailRequest) {
        return await this.service.findCate({ id: request.id });
    }

    @Put(':id')
    update(@Param('id') id: Number, @Body() params: UpdateRequest) {
        return this.service.updateCate(id, params);
    }
}
