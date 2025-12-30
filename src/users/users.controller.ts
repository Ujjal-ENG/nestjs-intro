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
  public getUserById(@Param('id') id: string) {
    return `This method for particular user like: ${id}`;
  }

  @Get('/:id/:optional')
  public getUserbyGet(@Param() params: any) {
    console.log(params);
  }
}
