import {  IsNumber, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UpdateOrderDetailRequest {
    @IsNumber()
    @ApiModelProperty({ example: 1 })
    quantity: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    products: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    orders: number;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: boolean;
}
