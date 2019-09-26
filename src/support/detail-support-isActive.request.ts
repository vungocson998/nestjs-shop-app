import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class DetailSupportActive {
    @IsBoolean()
    @ApiModelProperty({ example: true })
    isActive: Boolean;
}
