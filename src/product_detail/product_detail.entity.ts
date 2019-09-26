import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Products} from "../products/products.entity"
import { Media } from '../media/media.entity';
@Entity({
    name: "porduct_detail",
    synchronize: true
})
export class Product_detail extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ nullable: true,  type: 'int' })
    quantity: number;

    @Column({ nullable: true,  type: 'float' })
    price: number;

    @Column()
    colors: string;

    @Column()
    size: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => Products, products => products.id)
    products: Products

    @ManyToOne(type => Media, media => media.id)
    media: Media

}

