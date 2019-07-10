import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm'
import {Category} from "../categories/category.entity"
import { Media } from "../media/media.entity"
@Entity({
    name: "slide",
    synchronize: true
})
export class Slide extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ length: 200, nullable: true })
    heading: string;

    @Column({ nullable: false, length:200 })
    content: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => Category, Category => Category.id)
    category: Category

    @OneToOne(type => Media, Media => Media.id)
    media : Media
}

