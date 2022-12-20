import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserAdminDto {
  @ApiProperty({ default: 'name' })
  @IsString()
  readonly name_admin: string;
  @ApiProperty({ default: 'name' })
  @IsString()
  readonly position: string;
  @ApiProperty({ default: 'qwerty123' })
  @IsString()
  password: string;
  @ApiProperty({ default: 'name' })
  @IsString()
  readonly phone: string;
  role: string;
}
