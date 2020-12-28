import { Body, Controller, Get, Put, Render, Session } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('users')
export class UsersController {

    constructor(private appService: AppService) { }

    @Get()
    @Render('profile')
    getUser(@Session() session) {
        const user = this.appService.getUser(session.userId);
        console.log("the returning user", user);
        return user;
    }

    @Put()
    updateUser(
        @Session() session,
        @Body() body
    ) {
        return this.appService.updateUser(session.userId, body.description);
    }



}
