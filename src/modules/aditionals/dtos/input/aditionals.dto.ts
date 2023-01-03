import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBase64, IsOptional, IsString } from 'class-validator';

export class CreateNewAditionalsDto {
  @ApiProperty({ default: 'porsion de papa' })
  @IsString()
  name_aditionals: string;

  @ApiProperty({ default: '50.000' })
  @IsString()
  price_aditionals: string;

  @ApiProperty({ default: 'img' })
  @IsOptional()
  img_aditionals: string;
}
export class UpdateAditionalsDto extends PartialType(CreateNewAditionalsDto) {}
