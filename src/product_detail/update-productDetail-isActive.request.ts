import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailProductDetailActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
