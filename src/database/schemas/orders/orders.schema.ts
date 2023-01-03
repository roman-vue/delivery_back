import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Menu } from '../Menu/menu.schema';

export type OrdersDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  name_user: string;
  @Prop()
  phone: string;
  @Prop()
  direction_order: string;
  @Prop()
  type_pay: string;
  @Prop({ required: false })
  money_value: string;
  @Prop({ required: false })
  nequi_attachment: string;
  @Prop()
  product_menu: Array<Object>;
  @Prop()
  order_aditional: Array<Object>;
  @Prop()
  total_price: string;
  @Prop()
  status_order: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
