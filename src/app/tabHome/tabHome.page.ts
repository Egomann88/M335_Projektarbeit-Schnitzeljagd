import { Component } from '@angular/core';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { User } from 'src/models/User';
import { AlertService } from 'src/services/AlertService';
import { ToastService } from 'src/services/toast.service';
import { UserService } from 'src/services/user.service';
import { UserHelper } from 'src/helpers/UserHelper';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { SCAVENGERHUNTS } from 'src/mocks/ScavengerHuntMock';

@Component({
  selector: 'app-tabHome',
  templateUrl: 'tabHome.page.html',
  styleUrls: ['tabHome.page.scss'],
})
export class TabHomePage {
  scavengerHunts: ScavengerHunt[] = SCAVENGERHUNTS;
  user: User = new User('', '');
  userValid: boolean = false;

  constructor(
    private alertService: AlertService,
    private toastService: ToastService,
    private userService: UserService,
    private scavengerHuntService: ScavengerHuntService
  ) { }

  // must be called every time when the view loads -> user can be changed in the settings
  async ionViewWillEnter() {
    this.user = await this.userService.getUser();
    this.userValid = this.isUserNameValid(this.user);
  }

  isUserNameValid = (user: User) => UserHelper.getFullUserName(user).trim() !== '';

  async prepareScavengerHunt() {
    if (!this.userValid) {
      console.log("User not valid -> prepare alert");
      await this.prepareAlert();
      return;
    }

    console.log("User is valid");
    this.startNewScavengerHunt();
  }

  async prepareAlert() {
    return new Promise(() => {
      // handler function for validation
      const handler = (data: any) => {
        const user = new User(data[0], data[1]);
        if (!this.isUserNameValid(user)) {
          this.toastService.presentToast('Ungültiger Name', 'danger');
          return;
        }

        this.userService.setUser(user);
        this.user = user;
        this.userValid = true;
        this.startNewScavengerHunt();
      };

      this.openAlert(handler);
    });
  }

  openAlert(handler: (data: any) => void) {
    // present alert
    this.alertService.PresentAlert(
      'Neue Schnitzeljagd beginnen',
      [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => false,  // skips handler and resolves with false
        },
        {
          text: 'Starten',
          handler,
        },
      ],
      'Bitte gib deinen Namen ein',
      [
        {
          placeholder: 'Vorname',
          attributes: {
            minlength: 1,
          },
        },
        {
          placeholder: 'Nachname',
          attributes: {
            minlength: 1,
          },
        },
      ]
    );
  }

  startNewScavengerHunt() {
    this.scavengerHuntService.startScavenge(this.user);
  }
}