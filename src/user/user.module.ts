import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { IsUserEmailUniqueConstraint } from './validators/is-user-email-unique.validator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, IsUserEmailUniqueConstraint],
})
export class UserModule {}
