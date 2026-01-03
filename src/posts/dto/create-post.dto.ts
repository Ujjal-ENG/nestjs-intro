import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsObject,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My Post Title',
    minLength: 3,
    maxLength: 50,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  title: string;

  @ApiProperty({
    description: 'The type of the post',
    example: 'Article',
    enum: postType,
  })
  @IsEnum(postType)
  postType: postType;

  @ApiProperty({
    description: 'The slug of the post',
    example: 'my-post-title',
    minLength: 3,
    maxLength: 50,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  slug: string;

  @ApiProperty({
    description: 'The status of the post',
    example: 'Published',
    enum: postStatus,
  })
  @IsEnum(postStatus)
  status: postStatus;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is the content of the post.',
    nullable: true,
    minLength: 10,
    maxLength: 1000,
  })
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  content?: string;

  @ApiProperty({
    description: 'The schema of the post',
    example: 'My Post Schema',
    nullable: true,
    minLength: 10,
    maxLength: 1000,
  })
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  schema?: string;

  @ApiProperty({
    description: 'The featured image URL of the post',
    example: 'https://example.com/my-post-image.jpg',
    nullable: true,
  })
  @IsUrl()
  featuredImageUrl?: string;

  @ApiProperty({
    description: 'The published date of the post',
    example: '2022-01-01T00:00:00.000Z',
  })
  @IsDate()
  publishedOn: Date;

  @ApiProperty({
    description: 'The tags of the post',
    example: ['tag1', 'tag2', 'tag3'],
    isArray: true,
    minLength: 1,
    maxLength: 10,
  })
  @IsArray()
  @IsString({ each: true })
  @MinLength(1)
  @MaxLength(10)
  tags?: string[];

  @ApiProperty({
    description: 'The meta options of the post',
    example: [
      {
        key: 'sidebarEnabled',
        value: true,
      },
    ],
    isArray: true,
  })
  @IsArray()
  @IsObject()
  metaOptions: { key: 'sidebarEnabled'; value: true }[];
}
