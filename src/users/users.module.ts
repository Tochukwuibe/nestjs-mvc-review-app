import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UsersController } from './controllers/users/users.controller';


@Module({
    controllers: [UsersController],
    providers: [AppService]
})
export class UsersModule {}
