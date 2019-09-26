import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {Category} from "../categories/category.entity"
@Entity({
    name: "porducts",
    synchronize: true
})
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ nullable: false,  type: 'float' })
    rate: number;

    @Column({ type: 'text' })
    description: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => Category, category => category.id)
    category: Category

}

