import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { isString } from 'util';
export class UpdateProductsRequest {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ example: "Pioneer Short-Sleeve Stripe Shirt" })
    name: string;

    @IsNumber()
    @ApiModelProperty({ example: 5 })
    rate: number;

    @IsString()
    @ApiModelProperty({ example: "A classy spring plaid available in an array of color options, grab a Gilman for every day of the week, and then some. This plain weave long sleeve features a button-down collar, chest pocket, and back box pleat."})
    description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty({ example: 1 })
    category: number;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
