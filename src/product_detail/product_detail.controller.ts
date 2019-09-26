import { Controller, Post, Body, Put, Param, Get, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { ProductDetailService } from './product_detail.service';
import { CreateProductDetailRequest } from './create-productDetail.request'
import { UpdateProductDetailRequest } from './update-productDetail.request'
import { DetailProductDetailActive } from './update-productDetail-isActive.request'
import { AuthGuard } from '@nestjs/passport';
@ApiBearerAuth()
@ApiUseTags('ProductDetail')
@Controller('ProductDetail')
export class ProductDetailController {
    constructor(private service: ProductDetailService) { }
    @UseGuards(AuthGuard('jwt'))
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateProductDetailRequest) {
        return await this.service.createProductDetail(request);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: UpdateProductDetailRequest) {
        return this.service.updateProductDetail(id, params);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id/isActive')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailProductDetailActive) {
        return this.service.updateProductDetailActive(id, params);
    }


    @Get('/product/:id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getProductId(@Param('id') id: Number) {
        return this.service.getProductId(id);
    }

    @Get('/:id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getProductDetailId(@Param('id') id: Number) {
        return this.service.getProductDetailId(id);
    }
}
