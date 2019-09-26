import { Controller, Post, Body, Put, Param, Get, UseGuards, Request,Query } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductsRequest } from './create-products.request'
import { UpdateProductsRequest } from './detail-products.request'
import { DetailProductsActive } from './detail-products-isActive.request'
import { findQueryRequest } from './find-paginate.request'
import { AuthGuard } from '@nestjs/passport';
@ApiUseTags('Products')
@Controller('Products')
export class ProductsController {
    constructor(private service: ProductsService) { }
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateProductsRequest) {
        return await this.service.createProducts(request);
    }

    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: UpdateProductsRequest) {
        return this.service.updateProducts(id, params);
    }


    @Put(':id/isActive')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailProductsActive) {
        return this.service.updateProductsActive(id, params);
    }

    @Get('')
    getProducts() {
        return this.service.getProducts();
    }

    @Get('/:id')
    getProductId(@Param('id') id: Number) {
        return this.service.getProductsId(id);
    }

    @Get('/category/product')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getCategoryId(@Query() query: findQueryRequest) {
        console.log(query);
        let params = {
            id: query.id || 2,
            limit: query.limit || 5,
            offset: (query.page == 1) ? 0 : (query.page - 1) * query.limit || 0
        };
        console.log(params)
        return this.service.findProductInCateID(params);
    }
}
