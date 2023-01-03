import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/database/schemas/Orders/orders.schema';
import { MenuModule } from '../menu/menu.module';
import { AditionalsModule } from '../aditionals/aditionals.module';
import { OrdersService } from './orders.service';

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
