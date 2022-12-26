import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateNewAditionalsDto,
  UpdateAditionalsDto,
} from './dtos/input/aditionals.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Aditionals,
  AditionalsDocument,
} from 'src/database/schemas/Aditionals/aditionals.schema';
import { Model } from 'mongoose';

@Injectable()
export class AditionalsService {
  constructor(
    @InjectModel(Aditionals.name)
    private aditionalsModel: Model<AditionalsDocument>,
  ) {}

  public async createCategory(createNewAditionalsDto: CreateNewAditionalsDto) {
    const buildAditionals = new this.aditionalsModel(createNewAditionalsDto);
    const save = await buildAditionals.save();
    return save;
  }

  public async allAditionals() {
    const find = this.aditionalsModel.find();
    return find;
  }

  public async getOneAditionals(idAditionals: string) {
    const findAditionals = await this.aditionalsModel.findOne({
      id: idAditionals,
    });
    if (!findAditionals) {
      throw new NotFoundException(`Opps this category does not exist`);
    }
    return findAditionals;
  }

  public async updated(
    idAditionals: string,
    { name_aditionals, price_aditionals, img_aditionals }: UpdateAditionalsDto,
  ) {
    const findAditionals = await this.getOneAditionals(idAditionals);
    findAditionals.name_aditionals = name_aditionals;
    findAditionals.price_aditionals = price_aditionals;
    findAditionals.img_aditionals = img_aditionals;
    const updateAditionals = new this.aditionalsModel(findAditionals);
    const save = await updateAditionals.save();
  }

  public async deleted(idCategory: string) {
    const findCategory = await this.aditionalsModel.findOne({ id: idCategory });
    if (!findCategory) {
      throw new NotFoundException(`Opps this category does not exist`);
    }
    const remove = await this.aditionalsModel.remove(findCategory);
    return 'deleted';
  }
}
