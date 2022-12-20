import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Menu } from '../Menu/menu.schema';

export type OrdersDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  name_user;
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
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
  order_menu: Menu;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
  })
  order_aditional;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
