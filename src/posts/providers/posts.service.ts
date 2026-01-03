import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

@Injectable()
export class PostsService {
  // dependency injection called
  constructor(private readonly userService: UsersService) {}

  create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findPostForUser(userId: number) {
    const user = this.userService.getUserById(userId);
    return user;
  }

  update(updatePostDto: UpdatePostDto) {
    console.log(updatePostDto);
    return `This action updates a #${updatePostDto?.id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
