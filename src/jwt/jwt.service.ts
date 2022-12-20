import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}
  public async generateToken(object: any) {
    try {
      const generate = jwt.sign(
        {
          object,
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
}
