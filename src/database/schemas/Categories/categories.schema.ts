import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  name_category: string;
  @Prop()
  description_category: string;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
