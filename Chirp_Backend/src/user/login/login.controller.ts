import { Body, Controller, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from '../user.service';
import { randomUUID } from 'crypto';

@Controller('api/login')
export class LoginController {
    constructor(private readonly userService: UserService) { }

    @Post()
    login(@Body() body) {
        if (!this.validator(body)) {
            throw new HttpException(
                'body data incomplete.',
                HttpStatus.BAD_REQUEST
            )
        }
        const user = this.userService.findOneEmail(body.userEmail);
        if (!user) {
            throw new HttpException(
                'Cannot find this email.',
                HttpStatus.NOT_FOUND
            )
        }
        const validPassword = user.password === body.password;
        if (!validPassword) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.BAD_REQUEST
            )
        }
        const token = randomUUID().toString();
        return { ...user, token: token };
    }

    validator(body: any): boolean {
        return body.userEmail && body.password;
    }
}
