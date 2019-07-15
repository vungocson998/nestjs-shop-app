import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ProductsController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  controllers: [ProductsController],
  providers: [CustomersService]
})
export class CustomersModule { }
