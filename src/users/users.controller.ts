import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers(@Query('name') name: string) {
    return `User get method and the name is ${name}`;
  }

  @Post()
  public createUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(ip);
    return 'This method only for create users!!';
  }

  @Patch('/:id')
  public getUserById(@Param('id') id: string) {
    return `This method for particular user like: ${id}`;
  }
}
