import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { randomUUID } from 'crypto';

@Controller('api/login')
export class LoginController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    login(@Body() body) {
        let user = this.userService.findOneEmail(body.userEmail);
        const validPassword = user.password === body.password;
        if (!validPassword) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.BAD_REQUEST
              )
        }
        const token = randomUUID().toString();
        return {...user, token: token};
    }
}
