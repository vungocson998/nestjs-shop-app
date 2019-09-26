import { IsEmail, IsString, IsNumber, IsNotEmpty, IsBoolean, Min, Max } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateCustomerRequest {
    @IsString()
    @ApiModelProperty({ example: "Hoàng Hải" })
    name: string;

    @IsNumber()
    @ApiModelProperty({ example: 'Tây kỳ - Tứ Kỳ - Hải Dương' })
    adress: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiModelProperty({ example: 'ngochaihoang167@gmail.com' })
    email: string;

    @IsString()
    @Min(0)
    @Max(10)
    @ApiModelProperty({ example: "aaaaaa", minLength: 6, maxLength: 14 })
    password: string;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: boolean;
}
