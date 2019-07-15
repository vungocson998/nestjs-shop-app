import { IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateProductsRequest {
    @IsString()
    @ApiModelProperty({ example: "Pioneer Short-Sleeve Stripe Shirt" })
    name: string;

    @IsNumber()
    @ApiModelProperty({ example: 5 })
    rate: string;

    @IsString()
    @ApiModelProperty({ example: "A classy spring plaid available in an array of color options, grab a Gilman for every day of the week, and then some. This plain weave long sleeve features a button-down collar, chest pocket, and back box pleat."})
    description: string;

    @IsNumber()
    @ApiModelProperty()
    category: number;

    @ApiModelProperty({ example: true })
    isActive: boolean;
}
