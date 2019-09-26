import {IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class findQueryRequest {

    @IsNumber()
    @ApiModelProperty({ example: 2, default:2})
    id: number;

    @IsNumber()
    @ApiModelProperty({ example: 2, default:10})
    limit: number;

    @IsNumber()
    @ApiModelProperty({ example: 0 , default:1})
    page: number;
}
