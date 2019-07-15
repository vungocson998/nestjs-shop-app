import { IsString, IsNumber, IsDate, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateOrdersRequest {
    @IsDate()
    @ApiModelProperty({ example: "2019/4/16" })
    date: number;

    @IsNumber()
    @ApiModelProperty({ example: 59 })
    total_price: number;

    @IsString()
    @ApiModelProperty({ example: 'Thu ngoc' })
    ship_name: string;

    @IsString()
    @ApiModelProperty({ example: 'Nam tu liem - Ha noi' })
    ship_adress: string;

    @IsNumber()
    @ApiModelProperty({ example: '01628190923' })
    ship_phone: number;

    @IsNumber()
    @ApiModelProperty({ example: 1 })
    customers: number;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: boolean;
}
