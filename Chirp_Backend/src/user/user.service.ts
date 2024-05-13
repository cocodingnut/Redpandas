import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/models/user';

@Injectable()
export class UserService {
  dummyUserList: User[] = [
    {
      _id: "6636d271b4f6e406d509d81d",
      userName: "redpandaAdmin",
      userEmail: "redpandaadmin@gmail.com",
      password: "chirppassword",
      userRole: "admin",
    },
    {
      _id: "663861200bd39c7f877aca87",
      name: "cutePanda",
      userName: "cuteRedPanda",
      userEmail: "redpandaiscute@test.com",
      password: "chirpchirp",
      userRole: "user",
      age: 9,
      gender: "Female",
      phone: 5148101919,
    }
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneId(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneEmail(userEmail: string) {
    return `This action returns a #${userEmail} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
