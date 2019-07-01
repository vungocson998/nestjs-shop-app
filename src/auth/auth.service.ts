import { Injectable, NotFoundException, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) { }
    async createToken(params) {
        const user: JwtPayload = params;
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: 60 * 60 * 3600,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {

        let user = await this.userService.userLogin(payload.email);
        if (!user) return false;

        return user;
    }

    async userLogin(email, password): Promise<any> {

        let user = await this.userService.findUser({ email: email, isActive: true });
        if (!user) throw new UnauthorizedException({
            status: HttpStatus.NOT_FOUND,
            message: 'Not found'
        });

        let vaildPwd = await bcrypt.compare(password, user.password);
        if (!vaildPwd) throw new UnauthorizedException({
            status: HttpStatus.UNAUTHORIZED,
            message: 'UNAUTHORIZED'
        });

        return {
            user: user,
            token: this.jwtService.sign({ userId: user.id, email: user.email, role: user.role }, { expiresIn: 7 * 24 * 60 * 60 })
        };
    }

    async userRegister(email, password): Promise<any> {
        let user = new User();
        user.email = email;
        user.password = await bcrypt.genSalt(10, password);

        return await this.userService.createUser(user);
    }
}
