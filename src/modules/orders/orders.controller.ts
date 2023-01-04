import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateNewOrderDto } from './dtos/input/orders.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/utils/roles.enum';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post('create-new-order')
  public async createNewOrder(@Body() createNewOrderDto: CreateNewOrderDto) {
    const data = await this.ordersService.createOrder(createNewOrderDto);
    return data;
  }

  @Get('check-order-by-id/:idOrder')
  public async checkOrderById(@Param('idOrder') idOrder: string) {
    const data = await this.ordersService.getById(idOrder);
    return data;
  }
}
