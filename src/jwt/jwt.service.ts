import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/database/schemas/Admin/admin.schema';
@Injectable()
export class JwtService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    private configService: ConfigService,
  ) {}
  public async generateToken(sign: any) {
    try {
      const generate = jwt.sign(
        {
          sign,
        },
        `${process.env.ACCESS_TOKEN}`,
        { expiresIn: `${process.env.TIME}` },
      );
      return generate;
    } catch (err) {
      Logger.error(err);
    }
  }

  public async verifyToken(token: string) {
    const verify = await jwt.verify(token, `${process.env.ACCESS_TOKEN}`);
    return verify;
  }

  public async typeRole(id: string) {
    const user = await this.adminModel.findOne({ where: { id: id } });

    if (!user.role) throw new BadRequestException('access not allowed');
    let rol = '';
    switch (user.role) {
      case 'user':
        rol = 'user';
        break;
      case 'admin':
        rol = 'admin';
        break;
    }

    return rol;
  }
}
