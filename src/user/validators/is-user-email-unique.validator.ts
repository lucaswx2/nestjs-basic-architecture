import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraintInterface,
  ValidatorConstraint,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint()
export class IsUserEmailUniqueConstraint
  implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  validate(email: string): boolean | Promise<boolean> {
    return !this.userService.findByEmail(email);
  }
}

export function IsUserEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserEmailUniqueConstraint,
    });
  };
}
