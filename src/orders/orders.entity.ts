import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Customers } from '../customers/customers.entity';
@Entity({
    name: "orders",
    synchronize: true
})
export class Orders extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({type: 'date'})
    date: number;

    @Column({ nullable: true,  type: 'float' })
    total_price: number;

    @Column({ length: 50 })
    ship_name: string;

    @Column({ length: 50  })
    ship_adress: string;

    @Column({ type: 'int'  })
    ship_phone: number;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => Customers, customers => customers.id)
    customers: Customers
}

