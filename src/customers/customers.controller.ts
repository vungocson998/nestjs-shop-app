import { Controller, Post, Body, Put, Param, Get, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductsRequest } from './create-customer.request';
@ApiBearerAuth()
@ApiUseTags('Customers')
@UseGuards(AuthGuard('jwt'))
@Controller('Customers')
export class ProductsController {
    constructor(private service: CustomersService) { }
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateProductsRequest) {
            return await this.service.createCustomers(request);  
    }
}
