import { IsEmail, IsString, Min, Max, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class SignInRequest {
    @IsEmail()
    @IsNotEmpty()
    @ApiModelProperty({ example: "abc@d.vn" })
    email: string;

    @IsString()
    @Min(0)
    @Max(10)
    @ApiModelProperty({ example: "aaaaaa", minLength: 6, maxLength: 14 })
    password: string;

}
