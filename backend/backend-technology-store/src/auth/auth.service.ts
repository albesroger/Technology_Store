import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/DTO/CreateUserDto';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async Register(user: CreateUserDto) {
    const { email, password } = user;

    const userExisting = await this.userService.findByEmail(email);

    if (userExisting) {
      throw new BadRequestException({
        errors: {
          email: 'Ya existe un usuario con este email',
        },
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    return this.userService.AddUser({ email, password: passwordHash });
  }

  async Login(
    user: Omit<CreateUserDto, 'confirmPassword'>,
  ): Promise<{ access_token: string; uid: string }> {
    const userExisting = await this.userService.findByEmail(user.email);

    if (!userExisting) {
      throw new UnauthorizedException({
        errors: {
          email: 'Correo incorrecto',
        },
      });
    }
    const isValidPassword = await bcrypt.compare(
      user.password,
      userExisting?.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException({
        errors: {
          password: 'Contraseña incorrecta',
        },
      });
    }

    const payload = { sub: userExisting.id, email: userExisting.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
      uid: userExisting.id,
    };
  }
}
