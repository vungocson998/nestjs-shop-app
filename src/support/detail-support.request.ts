import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetaiSupportRequest {
    @IsString()
    @ApiModelProperty({ example: "Hoang Hai" })
    name: string;

    @IsString()
    @ApiModelProperty({ example: "01655190928" })
    contact: string;

    @ApiModelProperty({ example: true })
    isActive: boolean;
}
