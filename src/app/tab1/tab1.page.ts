import { Component } from '@angular/core';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { User } from 'src/models/User';
import { UserHelper } from 'src/helper/UserHelper';
import { AlertService } from 'src/Services/AlertService';
import { SCAVENGERHUNTS } from 'src/mocks/ScavengerHuntMock';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
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
        if (UserHelper.getUserName(this.user).trim() === '') {
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
