import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import {
  CreateNewCategoryDto,
  UpdatedCategoryDto,
} from './dto/input/createCategory.dto';

@ApiTags('CATEGORIES')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create-new-category')
  public async createNewCategory(
    @Body() createNewCategoryDto: CreateNewCategoryDto,
  ) {
    const data = await this.categoriesService.createCategory(
      createNewCategoryDto,
    );
    return data;
  }

  @Get('all-categories')
  public async allCategories() {
    const data = await this.categoriesService.allCategories();
    return data;
  }

  @Get('one-category/:idCategory')
  public async oneCategory(@Param('idCategory') idCategory: string) {
    const data = await this.categoriesService.getOneCategory(idCategory);
    return data;
  }

  @Put('update-category/:idCategory')
  public async updated(
    @Param('idCategory') idCategory: string,
    @Body() updatedCategoryDto: UpdatedCategoryDto,
  ) {
    const data = await this.categoriesService.updated(
      idCategory,
      updatedCategoryDto,
    );
    return data;
  }

  @Delete('delete-category/:idCategory')
  public async deleted(@Param('idCategory') idCategory: string) {
    const data = await this.categoriesService.deleted(idCategory);
    return data;
  }
}
