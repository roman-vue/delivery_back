import { Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/input/singIn.dto';
import { AdminService } from '../admin/admin.service';
import { JwtService } from 'src/jwt/jwt.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  public async singIn({ name_admin, password }: SignInDto) {
    const verify_admin = await this.adminService.findByName(name_admin);
    const compare_password = await bcrypt.compare(
      password,
      verify_admin.password,
    );
    if (compare_password) {
      let objectSign = {
        name: verify_admin.name_admin,
        role: verify_admin.role,
      };
      const generate = await this.jwtService.generateToken(objectSign);
      return generate;
    } else {
      throw new UnauthorizedException(`your password is incorrect`);
    }
  }
}
