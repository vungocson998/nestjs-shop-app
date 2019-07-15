import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {Category} from "../categories/category.entity"
@Entity({
    name: "support",
    synchronize: true
})
export class Support extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ length: 50, nullable: true })
    name: string;

    @Column({ nullable: false, length:200 })
    contact: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;
}

