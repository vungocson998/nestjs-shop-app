import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailProductsActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
