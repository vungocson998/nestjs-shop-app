import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { CategoriesModule } from './categories/categories.module';
import { MediaModule } from './media/media.module';
import { SlideModule } from './slide/slide.module';
import { SupportModule } from './support/support.module';
import { ProductsModule } from './products/poducts.module';
import { ProductDetailModule } from './product_detail/poduct_detail.module'
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module'
import { OrderDetailModule } from './order_detail/order_detail.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    AuthModule,
    CategoriesModule,
    MediaModule,
    SlideModule,
    SupportModule,
    ProductsModule,
    ProductDetailModule,
    CustomersModule,
    OrdersModule,
    OrderDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
  }
}
