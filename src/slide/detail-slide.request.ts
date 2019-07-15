import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UpdateSlideRequest {
    @IsString()
    @ApiModelProperty({ example: "Forge For All" })
    heading: string;

    @IsString()
    @ApiModelProperty({ example: "Our most popular polo shirt comes in so many styles." })
    content: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty({ example: 1 })
    media: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiModelProperty({ example: 1 })
    category: number;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
