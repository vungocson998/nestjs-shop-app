import { IsEmail, IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateSlideRequest {
    @IsString()
    @ApiModelProperty({ example: "Forge For All" })
    heading: string;

    @IsString()
    @ApiModelProperty({ example: "Our most popular polo shirt comes in so many styles." })
    content: string;

    @IsNumber()
    @ApiModelProperty()
    media: number;

    @IsNumber()
    @ApiModelProperty({ example: 1})
    group: number;

    @IsNumber()
    @ApiModelProperty()
    category: number;

    @ApiModelProperty({ example: true })
    isActive: boolean;
}
