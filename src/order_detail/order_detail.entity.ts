import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Products} from "../products/products.entity"
import { Orders } from "../orders/orders.entity"
@Entity({
    name: "order_detail",
    synchronize: true
})
export class Order_detail extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => Products, products => products.id)
    products: Products

    @ManyToOne(type => Orders, order => order.id)
    orders: Orders

}

