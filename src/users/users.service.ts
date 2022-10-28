import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: "tomschall",
        password: "1234",
      },
      {
        userId: 2,
        username: "roli",
        password: "fickenwiedermaltest",
      },
      {
        userId: 3,
        username: "maria",
        password: "guess",
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
