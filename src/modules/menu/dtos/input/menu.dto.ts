import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBase64, IsOptional, IsString } from 'class-validator';

export class CreateNewMenuDto {
  @ApiProperty()
  category: string;
  @ApiProperty({ default: 'salchipapa sensilla' })
  name_product: string;
  @ApiProperty({ default: '300000' })
  price_product: string;
  @ApiProperty()
  @IsOptional()
  img_product: string;
}

export class UpdatedMenuDto extends PartialType(CreateNewMenuDto) {}
