import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from '../users/user.entity';

@Entity({
    name: "medias",
    synchronize: true
})
export class Media extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    originalName: string;

    @Column({ type: 'varchar' })
    fileName: string;

    @Column({ type: 'varchar' })
    filePath: string;

    @Column({ type: 'int', nullable: true, comment: 'file size in bytes' })
    fileSize: string;

    @Column({ type: 'varchar', nullable: true, comment: 'file mime' })
    fileMime: string;

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