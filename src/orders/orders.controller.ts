import { Controller, Post, Body, Put, Param, Get, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrdersRequest } from './create-orders.request';
import { UpdateOrdersRequest } from './detail-orders.request';
import { DetailOrdersActive } from './detail-orders-isActive.request';
import { AuthGuard } from '@nestjs/passport';
@ApiBearerAuth()
@ApiUseTags('Orders')
@UseGuards(AuthGuard('jwt'))
@Controller('Orders')
export class OrdersController {
    constructor(private service: OrdersService) { }
    @Post('add-new')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async create(@Body() request: CreateOrdersRequest) {
            return await this.service.createOrders(request);  
    }

    @Put(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    update(@Param('id') id: Number, @Body() params: UpdateOrdersRequest) {
        return this.service.updateOrders(id, params);
    }

    @Put(':id/isActive')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    updateActive(@Param('id') id: Number, @Body() params: DetailOrdersActive) {
        return this.service.updateOrdersActive(id, params);
    }

    @Get('')
    getOrders() {
        return this.service.getOrders();
    }

    @Get('/:id')
    getOrdersId(@Param('id') id: Number) {
        return this.service.getOrdersId(id);
    }
}
