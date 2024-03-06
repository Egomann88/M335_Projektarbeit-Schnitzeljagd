import { Component } from '@angular/core';
import { UserService } from "src/services/user.service";
import { User } from 'src/models/User';

@Component({
  selector: 'app-tabSettings',
  templateUrl: 'tabSettings.page.html',
  styleUrls: ['tabSettings.page.scss']
})
export class TabSettingsPage {
  user: User;

  constructor(private userService: UserService) {
    this.user = new User('', '');
  }

  async ngOnInit() {
    await this.loadUser()
  }

  async saveUser() {
    await this.userService.setUser(this.user);
  }

  async loadUser() {
    this.user = await this.userService.getUser();
  }

  async resetUser() {
    this.user = new User('', '');
    await this.userService.setUser(this.user);
  }
}
