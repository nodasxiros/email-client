import { Controller, Request, Post, UseGuards, Get, Body, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginRes } from './interfaces';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): LoginRes {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getOwnAccount(@Request() req): Promise<User> {
    return req.user;
  }

  @Post('signup')
  async signup(@Body() data: CreateUserDto): Promise<LoginRes> {
    try {
      const user = await this.authService.signup(data);
      const login = await this.authService.login(user);
      return login;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
