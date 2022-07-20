import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
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
  signup(@Body() data: CreateUserDto): Promise<User> {
    return this.authService.signup(data);
  }
}
