import { Controller, Post, Body, Get, Put, Delete, Param, Res, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiUseTags
} from '@nestjs/swagger';

import { UsersService, UserHasExist } from './users.service';
import { User } from './user.entity';
import { CreateUserRequest } from './create-user.request';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('Users')
@Controller('users')

export class UsersController {
    constructor(private service: UsersService) { }
    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Get(':id')
    @ApiCreatedResponse({ description: 'Find admin by ID' })
    async get(@Res() res: Response, @Param('id') id: number) {
        let data = await this.service.getUser(id);

        return res.status(HttpStatus.OK).json({ user: data });
    }

    @Post('add-new')
    async create(@Body() request: CreateUserRequest) {
        try {
            return await this.service.createUser(request);
        } catch (UserHasExist) {
            throw new HttpException({
                status: HttpStatus.UNPROCESSABLE_ENTITY,
                message: UserHasExist.message,
            }, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard())
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
