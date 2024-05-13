import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user/user.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';

@Module({
  controllers: [UserController, LoginController, RegisterController],
  providers: [UserService],
})
export class UserModule {}
