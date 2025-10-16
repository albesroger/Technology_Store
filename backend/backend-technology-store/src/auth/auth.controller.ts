import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/DTO/CreateUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  Register(@Body() user: CreateUserDto) {
    return this.authService.Register(user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  Login(@Body() login: Omit<CreateUserDto, 'confirmPassword'>) {
    return this.authService.Login(login);
  }
}
