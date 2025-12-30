import { Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Users get method';
  }

  @Post()
  public createUser() {
    return 'This method only for create users!!';
  }

  @Patch('/:id')
  public getUserById(@Param() params: { id: string }) {
    return `This method for patricular user like: ${params?.id}`;
  }
}
