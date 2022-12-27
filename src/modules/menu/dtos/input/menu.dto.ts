import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBase64, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/database/schemas/Categories/categories.schema';

export class CreateNewMenuDto {
  @ApiProperty({ default: 'menu 1' })
  name_menu;
  @ApiProperty()
  category: Category;
  @ApiProperty({ default: 'salchipapa sensilla' })
  name_product: string;
  @ApiProperty({ default: '300000' })
  price_product: string;
  @ApiProperty()
  @IsBase64()
  @IsOptional()
  img_product: string;
}

export class UpdatedMenuDto extends PartialType(CreateNewMenuDto) {}
