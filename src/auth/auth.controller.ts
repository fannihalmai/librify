import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return this.authService.getProfile(req);
  }
}
