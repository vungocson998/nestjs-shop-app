import { createParamDecorator } from '@nestjs/common';

export const admin = createParamDecorator((data, req) => { req.user });