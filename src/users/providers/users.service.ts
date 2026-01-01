import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/providers/auth.service';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  private readonly Users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      posts: [
        {
          id: 1,
          title: 'Getting Started with NestJS',
          content:
            'NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.',
        },
        {
          id: 2,
          title: 'Understanding TypeScript',
          content:
            'TypeScript adds static typing to JavaScript, making your code more robust and maintainable.',
        },
      ],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
      posts: [
        {
          id: 3,
          title: 'React Best Practices',
          content:
            'Learn the best practices for building React applications in 2024.',
        },
        {
          id: 4,
          title: 'State Management in React',
          content:
            'A comprehensive guide to managing state in modern React applications.',
        },
      ],
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      password: 'password789',
      posts: [
        {
          id: 5,
          title: 'Docker for Beginners',
          content: 'Learn how to containerize your applications using Docker.',
        },
        {
          id: 6,
          title: 'Kubernetes Deployment',
          content:
            'Deploy and manage your containers at scale with Kubernetes.',
        },
      ],
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Williams',
      email: 'emily.williams@example.com',
      password: 'password012',
      posts: [
        {
          id: 7,
          title: 'CSS Grid Layout',
          content:
            'Master CSS Grid to create complex and responsive layouts effortlessly.',
        },
        {
          id: 8,
          title: 'Modern CSS Techniques',
          content:
            'Explore the latest CSS features and techniques for modern web development.',
        },
      ],
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      password: 'password345',
      posts: [
        {
          id: 9,
          title: 'MongoDB Tutorial',
          content:
            'A complete guide to working with MongoDB and NoSQL databases.',
        },
        {
          id: 10,
          title: 'Database Design Patterns',
          content:
            'Learn essential database design patterns for scalable applications.',
        },
      ],
    },
    {
      id: 6,
      firstName: 'Sarah',
      lastName: 'Davis',
      email: 'sarah.davis@example.com',
      password: 'password678',
      posts: [
        {
          id: 11,
          title: 'GraphQL vs REST',
          content:
            'Compare GraphQL and REST API architectures and when to use each.',
        },
        {
          id: 12,
          title: 'API Security Best Practices',
          content:
            'Secure your APIs with these essential security best practices.',
        },
      ],
    },
    {
      id: 7,
      firstName: 'Daniel',
      lastName: 'Miller',
      email: 'daniel.miller@example.com',
      password: 'password901',
      posts: [
        {
          id: 13,
          title: 'AWS Cloud Services',
          content:
            'An introduction to Amazon Web Services and cloud computing.',
        },
        {
          id: 14,
          title: 'Serverless Architecture',
          content: 'Build scalable applications without managing servers.',
        },
      ],
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Wilson',
      email: 'olivia.wilson@example.com',
      password: 'password234',
      posts: [
        {
          id: 15,
          title: 'Vue.js 3 Features',
          content: 'Discover the new features and improvements in Vue.js 3.',
        },
        {
          id: 16,
          title: 'Composition API Guide',
          content:
            'Master the Vue.js Composition API for better code organization.',
        },
      ],
    },
    {
      id: 9,
      firstName: 'Matthew',
      lastName: 'Moore',
      email: 'matthew.moore@example.com',
      password: 'password567',
      posts: [
        {
          id: 17,
          title: 'Testing with Jest',
          content: 'Learn how to write effective unit tests using Jest.',
        },
        {
          id: 18,
          title: 'E2E Testing Strategies',
          content: 'Implement end-to-end testing for your web applications.',
        },
      ],
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Taylor',
      email: 'ava.taylor@example.com',
      password: 'password789',
      posts: [
        {
          id: 19,
          title: 'Git Workflow Tips',
          content: 'Improve your Git workflow with these productivity tips.',
        },
        {
          id: 20,
          title: 'CI/CD Pipeline Setup',
          content:
            'Set up continuous integration and deployment for your projects.',
        },
      ],
    },
  ];
  public getAllUsers(getUserParamDto: GetUsersParamDto) {
    return this.Users;
  }

  public getUserById(id: string | number) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    const user = this.Users.find((user) => user?.id == id);
    if (user?.id == undefined) return 'User Not Found!!';
    return user;
  }
}
