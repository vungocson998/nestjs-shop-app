import { Injectable, Inject, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';
import { Category } from './category.entity';
import { User } from 'src/users/user.entity';
@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Category) private catesRepository: TreeRepository<Category>) { }

    async findCate(condition: any) {
        return await this.catesRepository.findOne(condition);
    }

    async createCate(currentUser: User, params: any): Promise<Category> {
        let parent = await this.catesRepository.findOne({ id: params.parentId });
        let cate = new Category();
        if (parent) {
            cate.parent = parent;
        }

        cate.name = params.name;
        cate.slug = params.name;
        cate.description = params.description;
        cate.createdBy = currentUser;
        cate.updatedBy = currentUser;

        return await this.catesRepository.save(cate);
    }

    async findTrees() {
        return await this.catesRepository.findTrees();
    }

    async updateCate(id, params) {
        try {
            let cate = await this.findCate({ id: id });
            let parent = await this.findCate({ id: params.parentId });

            cate.parent = parent || cate.parent;
            cate.name = params.name || cate.name;
            cate.description = params.description || cate.description,
                cate.slug = params.slug || cate.slug;

            return await this.catesRepository.update({ id: id }, cate);

        } catch (error) {
            throw error;
        }
    }
}
