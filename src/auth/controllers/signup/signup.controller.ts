import { Body, Controller, Get, Post, Render, Res, Session } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('signup')
export class SignupController {

    constructor(private authService: AuthService) { }

    @Get()
    @Render('signup')
    getSignupPage() {}

    @Post()
    signUp(
        @Body() body,
        @Session() session
    ) {

        const { username, password } = body;
        const user = this.authService.signUp(username, password);

        session.userId = user.id;
        return user;
    }
}
