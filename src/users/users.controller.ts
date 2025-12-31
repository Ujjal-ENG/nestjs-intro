import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers(@Param() getUserParamDto: GetUsersParamDto) {
    console.log(getUserParamDto);
    return `User get method`;
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto);
    return 'This method only for create users!!';
  }

  @Patch('/:id')
  public getUserById(@Param('id') id: string) {
    return `This method for particular user like: ${id}`;
  }
}
