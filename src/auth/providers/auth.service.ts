import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  login(email: string, password: string, id: string) {
    const user = this.userService.getUserById(4);

    return 'simple token';
  }

  isAuth() {
    return true;
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
