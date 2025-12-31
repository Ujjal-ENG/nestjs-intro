import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  public getAllUsers(@Param() getUserParamDto: GetUsersParamDto) {
    return this.userService.getAllUsers(getUserParamDto);
  }

  @Get('/:email')
  public getUserByEmail(@Param('email') email: string) {
    return this.getUserByEmail(email);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto);
    return 'This method only for create users!!';
  }

  @Patch('/:id')
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
