import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from '../menu/menu.module';
import { AditionalsModule } from '../aditionals/aditionals.module';
import { OrdersService } from './orders.service';
import {
  Order,
  OrderSchema,
} from '../../database/schemas/orders/orders.schema';

@Module({
  imports: [
    MenuModule,
    AditionalsModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
