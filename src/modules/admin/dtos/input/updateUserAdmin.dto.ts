import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserAdminDto {
  @ApiProperty({ default: 'name' })
  @IsString()
  readonly name_admin: string;
  @ApiProperty({ default: 'name' })
  @IsString()
  readonly position: string;
}
