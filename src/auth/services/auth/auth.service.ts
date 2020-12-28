import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Injectable()
export class AuthService {
    
    constructor(private appService: AppService) { }

    public signUp(username: string, password: string) {
        return this.appService.createUser(username, password);
    }

    public login(username: string, password: string) {
        return this.appService.findUserByEmailAndPassword(username, password);
    }
}
