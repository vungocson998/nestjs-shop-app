import { IsString, Min, Max, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { ApiModelProperty, ApiConsumes, ApiImplicitFile } from '@nestjs/swagger';
export class CreateRequest {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ example: "example.jpg" })
    fileName: string;

    @IsNumber()
    @ApiModelProperty({ example: 0, required: false })
    fileSize: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @ApiModelProperty({ example: "Description", type: String, maxLength: 500 })
    description: string;
}
