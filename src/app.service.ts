import { Injectable } from '@nestjs/common';
const users = {} as {
  [id: string]: {
    username: string,
    password: string,
    description: string
  }
}

@Injectable()
export class AppService {

  getUser(userId: string) {
    console.log("the users ", users, userId);
    return users[userId];
  }



  createUser(username: string, password: string) {
    const newUser = { username, password, description: "Im new" };
    const id = Date.now().toString() + username;
    users[id] = newUser;
    console.log("setting user with ", users, newUser);
    return { id, ...newUser };
  }

  updateUser(userId: string, description: string) {
    const user = this.getUser(userId);

    if (!user) {
      // Todo throw error
    }

    users[userId] = { ...user, description };

  }

  findUserByEmailAndPassword(username: string, password: string) {
    for (const [key, value] of Object.entries(users)) {
      if (value.username === username && value.password === password) {
        return { id: key, ...value };
      }
    }
    return null;
  }



}
