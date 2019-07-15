import { Module } from '@nestjs/common';
import { ProductDetailService } from './product_detail.service';
import { ProductDetailController } from './product_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product_detail } from './product_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product_detail])],
  controllers: [ProductDetailController],
  providers: [ProductDetailService]
})
export class ProductDetailModule { }
