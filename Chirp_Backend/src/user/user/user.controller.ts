import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('getAllUsers')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/getProfile/:username')
  findOne(@Param('username') name: string) {
    const user = this.userService.findOneByName(name)
    if (!user) {
      throw new HttpException(
        'Cannot find this user.',
        HttpStatus.NOT_FOUND
      )
    }
    return user;
  }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
