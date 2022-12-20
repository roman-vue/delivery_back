import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/input/singIn.dto';
import { SignInResponse } from './dtos/output/signIn.response.dto';
@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiResponse({ type: SignInResponse, status: 201 })
  @Post('sign-in')
  public async signIn(@Body() signInDto: SignInDto) {
    const data = await this.authService.singIn(signInDto);
    return data;
  }

  // @ApiResponse({ type: SignInResponse, status: 201 })
  // @Post('sign-up')
  // public async signUp(@Body() signUpDto: SignUpDto) {
  //   const data = await this.authService.singIn(signUpDto);
  //   return data;
  // }
}
