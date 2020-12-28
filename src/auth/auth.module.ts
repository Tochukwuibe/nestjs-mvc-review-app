import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login/login.controller';
import { SignupController } from './controllers/signup/signup.controller';
import { AuthService } from './services/auth/auth.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [
    LoginController,
    SignupController
  ],
  providers: [
    AuthService,
    AppService
  ]
})
export class AuthModule { }
