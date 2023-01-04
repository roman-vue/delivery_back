import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();

    const auth = request.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    if (!token) {
      throw new ForbiddenException('token undefined');
    }
    if (typeof token === 'undefined' || token === null)
      throw new ForbiddenException('token undefined');
    request.user = <jwt.JwtPayload>await this.jwtService.verifyToken(token);

    if (!roles.length) return true;

    const rol = await this.jwtService.typeRole(request.user.id);

    let role = false;
    for (const pro in roles) {
      if (roles[pro] == rol) role = true;
    }
    if (!role) throw new BadRequestException('role not allowed');

    return true;
  }
}
