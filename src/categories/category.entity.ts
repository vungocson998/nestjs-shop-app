import { Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from '../users/user.entity';

@Entity()
@Tree("closure-table")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'varchar', unique: true })
    slug: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;

    @Column({ type: 'text', nullable: true, comment: 'Description' })
    description: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @ManyToOne(type => User, user => user.id)
    createdBy: User

    @ManyToOne(type => User, user => user.id)
    updatedBy: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;



}