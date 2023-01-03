import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { CreateNewMenuDto, UpdatedMenuDto } from './dtos/input/menu.dto';
import { Delete } from '@nestjs/common/decorators';
import { Role } from 'src/utils/roles.enum';
import { Roles } from 'src/common/decorators/roles.decorator';
@ApiTags('MENU')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Post('create-new-menu')
  @Roles(Role.Admin)
  public async createNewMenu(@Body() createNewMenuDto: CreateNewMenuDto) {
    const data = await this.menuService.createMenu(createNewMenuDto);
    return data;
  }

  @Get('all-menus')
  @Roles(Role.Admin)
  public async allMenus() {
    const data = await this.menuService.allMenu();
    return data;
  }

  @Get('one-menu/:idMenu')
  @Roles(Role.Admin)
  public async oneMenu(@Param('idMenu') idMenu: string) {
    const data = await this.menuService.findOneMenu(idMenu);
    return data;
  }

  @Put('updated-menu/:idMenu')
  @Roles(Role.Admin)
  public async updatedMenu(
    @Param('idMenu') idMenu: string,
    @Body() updatedMenuDto: UpdatedMenuDto,
  ) {
    const data = await this.menuService.updated(idMenu, updatedMenuDto);
    return data;
  }

  @Delete('delete-menu/:idMenu')
  @Roles(Role.Admin)
  public async deleteMenu(@Param('idMenu') idMenu: string) {
    const data = await this.menuService.deleted(idMenu);
    return data;
  }
}
