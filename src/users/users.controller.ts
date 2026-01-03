import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'This api return all the users',
  })
  @ApiResponse({
    status: 200,
    isArray: true,
    description: 'Array of object is return!!',
    headers: {},
  })
  public getAllUsers(@Param() getUserParamDto: GetUsersParamDto) {
    return this.userService.getAllUsers(getUserParamDto);
  }

  @Get('/:id')
  public getUserById(@Param('id') id: string | number) {
    return this.userService.getUserById(id);
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
