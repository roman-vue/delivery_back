import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { type } from 'os';

export class SignInDto {
  @ApiProperty({ default: 'rcalderin@gmail.com', type: String })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ default: 'qwerty123', type: String })
  @IsString()
  readonly password: string;
}
