import { Module } from '@nestjs/common';
import { OrderDetailService } from './order_detail.service';
import { OrderDetailController } from './order_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_detail } from './order_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order_detail])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService]
})
export class OrderDetailModule { }
