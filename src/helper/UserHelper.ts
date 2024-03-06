import { User } from 'src/models/User';

export class UserHelper {
  static getUserName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}