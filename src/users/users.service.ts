import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

export class UserHasExist {
    message = "User taken";
}

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(id: number): Promise<User> {
        return await this.userRepository.findOne({ "id": id });
    }

    async findUser(condition: any): Promise<User> {
        return await this.userRepository.findOne({
            select: ["id", "name", "email", "isActive", "password"],
            where: [condition]
        });
    }

    async userLogin(email: string): Promise<User> {
        return await this.userRepository.findOne({
            select: ["id", "name", "email", "isActive"],
            where: [{ "email": email.trim(), isActive: true }]
        });
    }

    async updateUser(user: User) {
        this.userRepository.save(user)
    }

    async createUser(params: any): Promise<any> {
        let exist = await this.userRepository.findOne({ email: params.email });
        console.log('exist', exist);
        if (exist) {
            throw new UserHasExist();
        }

        const user = new User();
        user.password = bcrypt.hashSync(params.password, bcrypt.genSaltSync(10));
        user.email = params.email;
        return await user.save()
    }

    async deleteUser(user: User) {
        this.userRepository.delete(user);
    }
}
