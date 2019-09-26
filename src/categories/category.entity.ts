import { Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from '../users/user.entity';
import { Media } from '../media/media.entity'

@Entity()
@Tree("closure-table")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    
    name: string;

    @Column({ type: 'varchar', unique: true, length:190 })
    slug: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;

    @Column({ type: 'text', nullable: true, comment: 'Description' })
    description: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type =>Media, media => media.id)
    media: Media

    @ManyToOne(type => User, user => user.id)
    createdBy: User

    @ManyToOne(type => User, user => user.id)
    updatedBy: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}