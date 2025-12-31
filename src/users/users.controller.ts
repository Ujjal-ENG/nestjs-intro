import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(
    @Query('name') name: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Param('id', ParseIntPipe) id: number | undefined,
  ) {
    console.log(limit, id);
    return `User get method and the name is ${name}`;
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This method only for create users!!';
  }

  @Patch('/:id')
  public getUserById(@Param('id') id: string) {
    return `This method for particular user like: ${id}`;
  }
}
