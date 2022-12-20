import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from '../Categories/categories.schema';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop()
  name_menu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;
  @Prop()
  name_product: string;
  @Prop()
  price_product: string;
  @Prop({ required: false })
  img_product: string;
}
export const MenuSchema = SchemaFactory.createForClass(Menu);
