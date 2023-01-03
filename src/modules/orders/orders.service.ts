import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Order,
  OrdersDocument,
} from 'src/database/schemas/Orders/orders.schema';
import { CreateNewOrderDto } from './dtos/input/orders.dto';
import { MenuService } from '../menu/menu.service';
import { AditionalsService } from '../aditionals/aditionals.service';
import { type } from 'os';
import { verify } from 'crypto';
import { StatusOrder } from 'src/utils/statusOrder.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private readonly ordersModel: Model<OrdersDocument>,
    private readonly menuService: MenuService,
    private readonly aditionalsService: AditionalsService,
  ) {}

  public async createOrder(createNewOrderDto: CreateNewOrderDto) {
    const verifyMenu = await this.verifyMenu(createNewOrderDto.order_menu);
    const verifyAditionals = await this.verifyAditionals(
      createNewOrderDto.order_aditional,
    );
    const totalPrice = await this.SumPrice(verifyMenu, verifyAditionals);
    const buildOrder = {
      name_user: createNewOrderDto.name_user,
      phone: createNewOrderDto.phone,
      direction_order: createNewOrderDto.direction_order,
      type_pay: createNewOrderDto.type_pay,
      money_value: createNewOrderDto.money_value,
      product_menu: verifyMenu,
      order_aditional: verifyAditionals,
      total_price: totalPrice,
      status_order: StatusOrder.PEDIDO,
    };
    const newOrder = new this.ordersModel(buildOrder);
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

  private async verifyMenu(idsMenu: Array<string>) {
    let order = [];
    for (const iterator_id of idsMenu) {
      const verify = await this.menuService.findOneMenu(iterator_id);
      order.push(verify);
    }
    return order;
  }

  private async verifyAditionals(idsAditionals: Array<string>) {
    if (!idsAditionals) {
      Logger.debug(`not aditionals`);
      return [];
    }
    let order_aditional = [];
    for (const iterator_id of idsAditionals) {
      const verify = await this.aditionalsService.getOneAditionals(iterator_id);
      order_aditional.push(verify);
    }
    return order_aditional;
  }

  private async SumPrice(
    priceProduct: Array<any>,
    priceAditionals: Array<any>,
  ) {
    let value_aditionals = 0;
    let value_product = 0;
    if (priceAditionals.length <= 0) {
      value_aditionals = 0;
    }
    const totalProduct = priceProduct.forEach(
      (ele) => (value_product += Number(ele.price_product)),
    );
    const totalAditional = priceAditionals.forEach(
      (ele) => (value_aditionals += Number(ele.price_aditionals)),
    );
    const sum = value_product + value_aditionals;
    return sum;
  }
}
