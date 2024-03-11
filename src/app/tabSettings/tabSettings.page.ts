import { Component } from '@angular/core';
import { UserService } from "src/services/user.service";
import { User } from 'src/models/User';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-tabSettings',
  templateUrl: 'tabSettings.page.html',
  styleUrls: ['tabSettings.page.scss']
})
export class TabSettingsPage {
  user: User;

  constructor(private userService: UserService, private scavengerHuntService: ScavengerHuntService) {
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

  DevInitializeTask(taskIndex: number) {
    this.scavengerHuntService.currentScavengerHunt = new ScavengerHunt(new Date(), 0, 0, new User('The almighty', 'God'));
    this.scavengerHuntService.currentIndex = taskIndex;
    this.scavengerHuntService.currentTask = this.scavengerHuntService.currentScavengerHunt.tasks[taskIndex];
    this.scavengerHuntService.navigateToNextTask();
  }
}