import { IsString, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateSupportRequest {
    @IsString()
    @ApiModelProperty({ example: "Hoang Hai" })
    name: string;

    @IsString()
    @ApiModelProperty({ example: "01655190928" })
    contact: string;

    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
