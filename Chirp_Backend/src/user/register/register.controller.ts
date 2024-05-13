import { Controller, Post } from '@nestjs/common';

@Controller('api/register')
export class RegisterController {
    @Post('createNewAccount')
    createNewAccount() {
        return 'newUserRegister';
    }
}
