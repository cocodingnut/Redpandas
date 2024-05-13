import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { randomUUID } from 'crypto';
import { User } from 'src/models/user';

@Controller('api/register')
export class RegisterController {
    constructor(private readonly userService: UserService) { }

    @Post('createNewAccount')
    createNewAccount(@Body() body) {
        if (!this.validator(body)) {
            throw new HttpException(
                'body data incomplete.',
                HttpStatus.BAD_REQUEST
            )
        }

        const userCheckEmail = this.userService.findOneByEmail(body.userEmail);
        const userCheckName = this.userService.findOneByName(body.userName);
        if (userCheckEmail || userCheckName) {
            throw new HttpException(
                'User already registered.',
                HttpStatus.BAD_REQUEST
            )
        }

        const user: User = {
            _id: randomUUID().toString(),
            name: body.name,
            userName: body.userName || '',
            userEmail: body.userEmail || '',
            password: body.password || '',
            userRole: 'user',
            age: body.age,
            gender: body.gender,
            phone: body.number,
        }

        this.userService.createTemp(user);
        const token = user._id;

        return { ...user, token: token };
    }

    @Get('getUserById/:id')
    findOne(@Param('id') id: string) {
        const user = this.userService.findOneById(id)
        if (!user) {
            throw new HttpException(
                'Cannot find this user.',
                HttpStatus.NOT_FOUND
            )
        }
        return user;
    }

    @Get('checkExistByEmail/:userEmail')
    checkExistByEmail(@Param('userEmail') email: string) {
        const user = this.userService.findOneById(email)
        if (!user) {
            return false;
        }
        return true;
    }

    @Get('checkExistByUsername/:username')
    checkExistByUsername(@Param('username') name: string) {
        const user = this.userService.findOneById(name)
        if (!user) {
            return false;
        }
        return true;
    }

    validator(body: any): boolean {
        return body.userEmail && body.password && body.userName;
    }
}
