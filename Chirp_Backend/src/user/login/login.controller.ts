import { Controller, Post } from '@nestjs/common';

@Controller('api/login')
export class LoginController {
    @Post()
    login() {
        return 'Login placeholder';
    }
}
