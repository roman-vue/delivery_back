import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/database/schemas/Admin/admin.schema';
import { CreateUserAdminDto } from './dtos/input/createUserAdmin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  public async createUserAdmin(createUserAdminDto: CreateUserAdminDto) {
    const encrypted = await bcrypt.hash(createUserAdminDto.password, 10);
    createUserAdminDto.password = encrypted;
    createUserAdminDto.role = 'ADMIN';
    const saveAdmin = new this.adminModel(createUserAdminDto);
    const save = saveAdmin.save();
    return save;
  }

  public async findAllAdmin() {
    const find = await this.adminModel.find();
    return find;
  }

  public async findByName(name_admin: string) {
    const findOne = await this.adminModel.findOne({ name_admin: name_admin });
    if (!findOne) {
      throw new NotFoundException(
        `sorry this admin ${name_admin} does not exist`,
      );
    }
    return findOne;
  }

  public async updateAdmin(idAdmin: string) {
    const findOne = await this.adminModel.findOne({ id: idAdmin });
    if (!findOne) {
      throw new NotFoundException(
        `sorry this admin ${findOne.name_admin} does not exist`,
      );
    }
    return findOne;
  }

  public async deleteAdmin(idAdmin: string) {
    const findOne = await this.adminModel.findOne({ id: idAdmin });
    if (!findOne) {
      throw new NotFoundException(
        `sorry this admin ${findOne.name_admin} does not exist`,
      );
    }
    await this.adminModel.remove(findOne);
  }
}
