import { Component } from '@angular/core';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { User } from 'src/models/User';
import { AlertService } from 'src/services/AlertService';
import { SCAVENGERHUNTS } from 'src/mocks/ScavengerHuntMock';

@Component({
  selector: 'app-tabHome',
  templateUrl: 'tabHome.page.html',
  styleUrls: ['tabHome.page.scss'],
})
export class TabHomePage {
  scavengerHunts: ScavengerHunt[] = SCAVENGERHUNTS;
  user: User = new User('', '');

  constructor(private alertService: AlertService) { }

  async startNewScavengerHunt() {
    const userValid = await this.validateUser();
    if (!userValid) {
      console.log("User not valid");
      return;
    }

    // start new scavenger hunt
    console.log("User is valid");
  }

  async validateUser() {
    return new Promise((resolve) => {
      const handler = (data: any) => {
        this.user = new User(data[0], data[1]);
        if (this.user.getUserName().trim() === '') {
          this.alertService.openErrorAlert("Kein gültiger Name eingegeben");
          resolve(false);
        } else {
          resolve(true);
        }
      };

      this.alertService.PresentAlert(
        'Neue Schnitzeljagd beginnen',
        [
          {
            text: 'Abbrechen',
            role: 'cancel',
            handler: () => resolve(false),  // skips handler and resolves with false
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
    });
  }
}
