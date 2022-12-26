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
import { CreateNewCategoryDto } from './dto/createCategory.dto';

@ApiTags('CATEGORIES')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('create-new-category')
  public async createNewCategory(
    @Body() createNewCategoryDto: CreateNewCategoryDto,
  ) {}

  @Get('all-categories')
  public async allCategories() {}

  @Get('one-category/:idCategory')
  public async oneCategory(@Param('idCategory') idCategory: string) {}

  @Put('update-category/:idCategory')
  public async updated(@Param('idCategory') idCategory: string) {}

  @Delete('delete-category/:idCategory')
  public async deleted(@Param('idCategory') idCategory: string) {}
}
