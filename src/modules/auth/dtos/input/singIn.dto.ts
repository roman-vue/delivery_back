import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { type } from 'os';

export class SignInDto {
  @ApiProperty({ default: 'name', type: String })
  @IsString()
  readonly name_admin: string;
  @ApiProperty({ default: 'qwerty123', type: String })
  @IsString()
  readonly password: string;
}
