import { IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateOrderDetailRequest {
    @IsNumber()
    @ApiModelProperty({ example: 1 })
    quantity: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    products: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    orders: number;

    @ApiModelProperty({ example: true })
    isActive: boolean;
}
