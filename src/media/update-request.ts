import { IsString, Min, Max, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UpdateRequest {
    // @IsNotEmpty()
    // @IsNumber()
    // @ApiModelProperty({ example: 0 })
    // id: number;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ example: "cate one" })
    name: string;

    @IsNumber()
    @Min(0)
    @Max(10)
    @ApiModelProperty({ example: 0 })
    parentId: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @ApiModelProperty({ example: "Description", type: String, maxLength: 500 })
    description: string;
}
