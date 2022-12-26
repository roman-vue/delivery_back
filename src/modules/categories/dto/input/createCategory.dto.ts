import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateNewCategoryDto {
  @ApiProperty({ default: 'salchipapas' })
  @IsString()
  name_category: string;

  @ApiProperty({ default: 'salchicha con papas' })
  @IsOptional()
  @IsString()
  description_category: string;
}

export class UpdatedCategoryDto extends PartialType(CreateNewCategoryDto) {}
