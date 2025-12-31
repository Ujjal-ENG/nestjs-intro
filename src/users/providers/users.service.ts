import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  private readonly Users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      password: 'password789',
    },
    {
      firstName: 'Emily',
      lastName: 'Williams',
      email: 'emily.williams@example.com',
      password: 'password012',
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      password: 'password345',
    },
    {
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@example.com',
      password: 'password678',
    },
    {
      firstName: 'Daniel',
      lastName: 'Miller',
      email: 'daniel.miller@example.com',
      password: 'password901',
    },
    {
      firstName: 'Olivia',
      lastName: 'Wilson',
      email: 'olivia.wilson@example.com',
      password: 'password234',
    },
    {
      firstName: 'Matthew',
      lastName: 'Moore',
      email: 'matthew.moore@example.com',
      password: 'password567',
    },
    {
      firstName: 'Ava',
      lastName: 'Taylor',
      email: 'ava.taylor@example.com',
      password: 'password789',
    },
  ];
  public getAllUsers(getUserParamDto: GetUsersParamDto) {
    return this.Users;
  }

  public getUserByEmail(email: string) {
    console.log(email);
    const user = this.Users.find((user) => user?.email == email);
    return user;
  }
}
