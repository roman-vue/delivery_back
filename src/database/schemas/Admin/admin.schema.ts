import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  name_admin: string;
  @Prop()
  position: string;
  @Prop()
  phone: string;
  @Prop()
  password: string;
  @Prop()
  role: string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
