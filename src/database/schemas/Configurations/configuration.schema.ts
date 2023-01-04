import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConfigurationsDocuments = HydratedDocument<Configuration>;

@Schema()
export class Configuration {
  @Prop()
  hourInit: string;
  @Prop()
  hourEnd: string;
  @Prop()
  openOrClose: boolean;
}
export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
