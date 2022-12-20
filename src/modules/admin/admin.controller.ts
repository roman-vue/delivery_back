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
import { AdminService } from './admin.service';
import { CreateUserAdminDto } from './dtos/input/createUserAdmin.dto';

@ApiTags('ADMIN')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('create-user-admin')
  public async createUserAdmin(@Body() createUserAdminDto: CreateUserAdminDto) {
    const data = await this.adminService.createUserAdmin(createUserAdminDto);
    return data;
  }

  @Get('get-all-admin')
  public async getAllAdmin() {
    const data = await this.adminService.findAllAdmin();
    return data;
  }

  @Get('get-one-admin-name/:name_admin')
  public async getAdminName(@Param('name_admin') name_admin: string) {
    const data = await this.adminService.findByName(name_admin);
    return data;
  }

  @Put('update-admin/:idAdmin')
  public async updated(@Param('idAdmin') idAdmin: string) {
    const data = await this.adminService.updateAdmin(idAdmin);
    return data;
  }

  @Delete('delete-admin/:idAdmin')
  public async deleted(@Param('idAdmin') idAdmin: string) {
    const data = await this.adminService.deleteAdmin(idAdmin);
    return data;
  }
}
