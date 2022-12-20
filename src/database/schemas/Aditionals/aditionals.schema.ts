import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from '../Categories/categories.schema';

export type AditionalsDocument = HydratedDocument<Aditionals>;

@Schema()
export class Aditionals {
  @Prop()
  name_aditionals: string;
  @Prop()
  price_aditionals: string;
  @Prop({ required: false })
  img_aditionals: string;
}
export const AditionalsSchema = SchemaFactory.createForClass(Aditionals);
