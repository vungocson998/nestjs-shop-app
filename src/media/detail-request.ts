import { IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailRequest {
    @IsNumber()
    @ApiModelProperty({ example: 0 })
    id: number;
}
