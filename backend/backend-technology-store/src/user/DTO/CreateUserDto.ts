import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class CreateUserDto {
  @IsString()
  @IsEmail({}, { message: 'Ingrese un correo electronico valido' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña deve tener minino 6 caracteres' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Match('password', { message: 'Las contraseña no coiciden' })
  confirmPassword: string;
}
