import { Injectable, UploadedFiles } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Media } from './media.entity';
import { User } from 'src/users/user.entity';
@Injectable()
export class MediaService {
    constructor(@InjectRepository(Media) private repository: Repository<Media>) { }

    async findBy(condition: any) {
        return await this.repository.findOne(condition);
    }

    async create(currentUser: User, files: any): Promise<any> {
        let mediaData = files.map((o) => {
            return {
                originalName: o.originalname,
                fileName: o.filename,
                filePath: o.path,
                fileSize: o.size,
                fileMime: o.mimetype,
                createdBy: currentUser.id,
                updatedBy: currentUser.id
            };
        });

        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Media)
                .values(mediaData)
                .execute();

            return true;
        } catch (error) {
            throw error;
        }
    }

    async update(id, params, user) {
        try {
            let cate = await this.findBy({ id: id });

            return await this.repository.update({ id: id }, cate);

        } catch (error) {
            throw error;
        }
    }
}
