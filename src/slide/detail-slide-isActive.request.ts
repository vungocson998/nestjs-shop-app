import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailSlideActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
