import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Order,
  OrdersDocument,
} from 'src/database/schemas/Orders/orders.schema';
import { CreateNewOrderDto } from './dtos/input/orders.dto';
import { MenuService } from '../menu/menu.service';
import { AditionalsService } from '../aditionals/aditionals.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private readonly ordersModel: Model<OrdersDocument>,
    private readonly menuService: MenuService,
    private readonly aditionalsService: AditionalsService,
  ) {}

  public async createOrder(createNewOrderDto: CreateNewOrderDto) {
    const newOrder = new this.ordersModel(createNewOrderDto);
    const save = await newOrder.save();
    return save;
  }

  public async getById(idOrder: string) {
    const findOrder = await this.ordersModel.findOne({ id: idOrder });
    if (!findOrder) {
      throw new NotFoundException(`oops this order does exist`);
    }
    return findOrder;
  }
}
