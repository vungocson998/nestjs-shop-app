import { IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UpdateProductDetailRequest {
    @IsNumber()
    @ApiModelProperty({ example: 1000 })
    quantity: number;

    @IsNumber()
    @ApiModelProperty({ example: 59 })
    price: string;

    @IsString()
    @ApiModelProperty({ example: "#FF0000" })
    colors: string;

    @IsString()
    @ApiModelProperty({ example: "M, L, XL, XXL" })
    size: string;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    products: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    media: number;

    @ApiModelProperty({ example: true })
    isActive: boolean;
}
