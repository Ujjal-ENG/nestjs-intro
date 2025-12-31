import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  private readonly Users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      password: 'password789',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Williams',
      email: 'emily.williams@example.com',
      password: 'password012',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      password: 'password345',
    },
    {
      id: 6,
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@example.com',
      password: 'password678',
    },
    {
      id: 7,
      firstName: 'Daniel',
      lastName: 'Miller',
      email: 'daniel.miller@example.com',
      password: 'password901',
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Wilson',
      email: 'olivia.wilson@example.com',
      password: 'password234',
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Moore',
      email: 'matthew.moore@example.com',
      password: 'password567',
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Taylor',
      email: 'ava.taylor@example.com',
      password: 'password789',
    },
  ];
  public getAllUsers(getUserParamDto: GetUsersParamDto) {
    return this.Users;
  }

  public getUserById(id: string | number) {
    console.log(id);
    const user = this.Users.find((user) => user?.id == id);
    return user;
  }
}
