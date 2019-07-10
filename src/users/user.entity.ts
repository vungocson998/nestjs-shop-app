import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
@Entity({
    name: "users",
    synchronize: true
})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ length: 25, nullable: true })
    name: string;

    @Column({ unique: true, nullable: false, length:60 })
    email: string;

    @Column({ length: 60 })
    password: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;

    @Column({ type: "tinyint", default: 1, comment: '1:user,2:admin, 3:post' })
    role: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}

