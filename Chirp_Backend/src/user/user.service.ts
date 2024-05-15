import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    },
    {
      "_id": "6209c0d87166c25a276912d6",
      "name": "Honey",
      "userName": "Honey",
      "userEmail": "honey@test.com",
      "password": "honey",
      "userRole": "user",
      "age": 11,
      "gender": "Female",
      "phone": 1234567890,
    },
    {
      "_id": "6636ee3f1304301f54c88654",
      "userName": "mercury",
      "userEmail": "mercury@gmail.com",
      "password": "$2a$10$2BFk00oERs970aMCdmRyQOvcaDMDX4Ig.cenEoeGvPGegiWNDUjm.",
      "userRole": "user",
  },
  ];

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  createTemp(createUser: User) {
    this.dummyUserList.push(createUser);
    return 'This action adds a new user';
  }

  findAll() {
    return this.dummyUserList;
  }

  findOneByName(name: string) {
    return this.dummyUserList.find((user) => user.userName === name);
  }

  findOneByEmail(userEmail: string) {
    return this.dummyUserList.find((user) => user.userEmail === userEmail);
  }

  findOneById(id: string) {
    return this.dummyUserList.find((user) => user._id === id);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
