import { User } from 'src/models/User';

export class UserHelper {
  static getFullUserName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}