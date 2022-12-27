import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/database/schemas/Menu/menu.schema';
import { CreateNewMenuDto, UpdatedMenuDto } from './dtos/input/menu.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { find } from 'rxjs';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  public async createMenu(createNewMenuDto: CreateNewMenuDto) {
    const buildMenu = new this.menuModel(createNewMenuDto);
    const save = await buildMenu.save();
  }

  public async allMenu() {
    const findMenu = await this.menuModel.find();
    return findMenu;
  }

  public async findOneMenu(idMenu: string) {
    const findMenu = await this.menuModel.findOne({ id: idMenu });
    if (!findMenu) {
      throw new NotFoundException(`this id does not exist`);
    }
    return findMenu;
  }
  public async updated(
    idMenu: string,
    { name_menu, price_product, img_product }: UpdatedMenuDto,
  ) {
    const findMenu = await this.findOneMenu(idMenu);
    findMenu.name_menu = name_menu;
    findMenu.price_product = price_product;
    findMenu.img_product = img_product;
    const update = new this.menuModel(findMenu);
    const save = update.save();
    return save;
  }

  public async deleted(idMenu: string) {
    const findMenu = await this.findOneMenu(idMenu);
    const remove = await this.menuModel.remove(findMenu);
    return 'delete';
  }
}
