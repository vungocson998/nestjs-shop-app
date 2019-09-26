import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailOrdersActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
