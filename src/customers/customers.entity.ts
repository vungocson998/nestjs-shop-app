import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
@Entity({
    name: "customers",
    synchronize: true
})
export class Customers extends BaseEntity {

    @PrimaryGeneratedColumn({ unsigned: true, type: 'int' })
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column( {length: 150 })
    adress: string;

    @Column({ unique: true, nullable: false, length:60 })
    email: string;

    @Column({ length: 60 })
    password: string;

    @Column({ default: true, comment: 'true:active, false:disable' })
    isActive: boolean;
}

