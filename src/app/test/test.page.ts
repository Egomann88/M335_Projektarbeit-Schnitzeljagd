import { Component, OnInit } from '@angular/core';
import { UserService } from "src/services/user.service";
import { User } from 'src/models/User';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.user = new User('', '');
  }

  async ngOnInit() {
    await this.loadNameFromStorage()
  }

  async saveNameToStorage() {
    await this.userService.setUser(this.user);
  }

  async loadNameFromStorage() {
    this.user = await this.userService.getUser();
  }
}
