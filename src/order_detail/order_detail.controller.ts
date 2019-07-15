import { Controller, Post, Body, Put, Param, Get, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { OrderDetailService } from './order_detail.service';
import { CreateOrderDetailRequest } from './create-orderDetail.request'
import { UpdateOrderDetailRequest } from './update-orderDetail.request'
import { DetailOrderDetailActive } from './update-orderDetail-isActive.request'
import { AuthGuard } from '@nestjs/passport';
@ApiBearerAuth()
@ApiUseTags('OrderDetail')
@UseGuards(AuthGuard('jwt'))
@Controller('OrderDetail')
export class OrderDetailController {
    constructor(private service: OrderDetailService) { }
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateOrderDetailRequest) {
            return await this.service.createOrderDetail(request);  
    }

    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: UpdateOrderDetailRequest) {
        return this.service.updateOrderDetail(id, params);
    }

    @Put(':id/isActive')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailOrderDetailActive) {
        return this.service.updateOrderDetailActive(id, params);
    }

    @Get('/orders/:id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getProductId(@Param('id') id: Number) {
        return this.service.getOrdersId(id);
    }

    @Get('/:id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    getOrderDetailId(@Param('id') id: Number) {
        return this.service.getOrderDetailId(id);
    }
}
