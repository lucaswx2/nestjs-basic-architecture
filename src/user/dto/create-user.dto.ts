import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsUserEmailUnique } from '../validators/is-user-email-unique.validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsUserEmailUnique({
    message: 'Email is not unique',
  })
  email: string;

  @IsNotEmpty()
  password: string;
}
