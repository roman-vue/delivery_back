import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBase64, IsNotEmpty, IsOptional } from 'class-validator';
import { type } from 'os';
import { AditionalsDocument } from 'src/database/schemas/Aditionals/aditionals.schema';
import { MenuDocument } from 'src/database/schemas/Menu/menu.schema';

export class CreateNewOrderDto {
  @ApiProperty({ default: 'anshi' })
  @IsNotEmpty()
  name_user: string;
  @ApiProperty({ default: '302229392' })
  @IsNotEmpty()
  phone: string;
  @ApiProperty({ default: 'calle 2' })
  @IsNotEmpty()
  direction_order: string;
  @ApiProperty()
  @IsNotEmpty()
  type_pay: string;
  @ApiProperty({ required: false })
  @IsOptional()
  money_value: string;
  @ApiProperty({ required: false })
  @IsOptional()
  nequi_attachment: string;
  @ApiProperty({ type: Array, required: true })
  order_menu: Array<string>;
  @ApiProperty({ type: Array, required: true })
  order_aditional: Array<string>;
}

export class UpdateOrderDto extends PartialType(CreateNewOrderDto) {}
