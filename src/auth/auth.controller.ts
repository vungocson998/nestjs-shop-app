import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiUseTags
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignUpRequest } from './signup.request';
import { SignInRequest } from './signin.request';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('token')
    async createToken(): Promise<any> {
        //return await this.authService.createToken();
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll() {
        // this route is restricted by AuthGuard
        // JWT strategy
    }

    @Post('users/login')
    async userLogin(@Body() request: SignInRequest) {
        return await this.authService.userLogin(request.email, request.password);
    }
}
