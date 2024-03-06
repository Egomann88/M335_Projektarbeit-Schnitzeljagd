import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { StorageService } from "src/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storageService: StorageService) {
    this.getUser().then((user) => {
      // If the user is not set, the user will be empty
      if (user === null) this.setUser(new User('', ''));
    });
  }

  async setUser(user: User) {
    await this.storageService.set('user', user);
  }

  async getUser(): Promise<User> {
    return await this.storageService.get('user');
  }

  async deleteUser() {
    await this.storageService.remove('user');
  }
}
