import { Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/input/singIn.dto';

@Injectable()
export class AuthService {
  constructor() {}
  public singIn({ email, password }: SignInDto) {}
}
