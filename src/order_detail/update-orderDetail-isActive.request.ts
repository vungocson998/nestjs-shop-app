import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailOrderDetailActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
