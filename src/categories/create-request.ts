import { IsString, Min, Max, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CreateRequest {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ example: "cate one" })
    name: string;

    @IsNumber()
    @ApiModelProperty({ example: 0, required: false })
    parentId: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @ApiModelProperty({ example: "Description", type: String, maxLength: 500 })
    description: string;
}
