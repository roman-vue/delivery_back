import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Category,
  CategoryDocument,
} from 'src/database/schemas/Categories/categories.schema';
import { CreateNewCategoryDto } from './dto/createCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  public async createCategory(createNewCategory: CreateNewCategoryDto) {
    const buildCategory = new this.categoryModel(createNewCategory);
    const save = await buildCategory.save();
    return save;
  }

  public async allCategories() {
    const find = this.categoryModel.find();
    return find;
  }

  public async getOneCategory(idCategory: string) {
    const findCategory = await this.categoryModel.findOne({ id: idCategory });
    if (!findCategory) {
      throw new NotFoundException(`Opps this category does not exist`);
    }
    return findCategory;
  }

  public async updated(idCategory: string) {}

  public async deleted(idCategory: string) {
    const findCategory = await this.categoryModel.findOne({ id: idCategory });
    if (!findCategory) {
      throw new NotFoundException(`Opps this category does not exist`);
    }
    const remove = await this.categoryModel.remove(findCategory);
    return 'deleted';
  }
}
