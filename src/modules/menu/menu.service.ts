import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/database/schemas/Menu/menu.schema';
import { CreateNewMenuDto, UpdatedMenuDto } from './dtos/input/menu.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { find } from 'rxjs';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly categoriesService: CategoriesService,
    @InjectModel(Menu.name) private menuModel: Model<MenuDocument>,
  ) {}

  public async createMenu(createNewMenuDto: CreateNewMenuDto) {
    const verifyCategory = await this.categoriesService.getOneCategory(
      createNewMenuDto.category,
    );
    const buildMenu = {
      category: verifyCategory,
      name_product: createNewMenuDto.name_product,
      price_product: createNewMenuDto.price_product,
      img_product: createNewMenuDto.img_product,
    };
    const saveMenu = new this.menuModel(buildMenu);
    const save = await saveMenu.save();
    return save;
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
    { price_product, img_product }: UpdatedMenuDto,
  ) {
    const findMenu = await this.findOneMenu(idMenu);
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
