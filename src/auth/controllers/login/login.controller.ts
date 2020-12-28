import { Body, Controller, Delete, Get, Post, Render, Res, Session } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService) { }

    @Get()
    @Render('login')
    getLoginPage() {

    }

    @Post()
    login(
        @Body() body,
        @Session() session
    ) {

        const { username, password } = body;
        const user = this.authService.login(username, password);

        if (!user) {
            // TODO throw errror
        }

        session.userId = user.id;
        return user;
    }

    @Delete()
    logout(
        @Session() session
    ) {
        console.log("logging out...")
        return session.destroy();
    }
}
