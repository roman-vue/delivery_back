import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
