import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from '../Categories/categories.schema';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop({ type: Object })
  category: Object;
  @Prop()
  name_product: string;
  @Prop()
  price_product: string;
  @Prop({ required: false })
  img_product: string;
}
export const MenuSchema = SchemaFactory.createForClass(Menu);
