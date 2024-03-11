import { Component, Input } from '@angular/core';
import { AlertService } from "../../../services/AlertService";
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent {
  @Input() title!: string

  constructor(private alertService: AlertService, private scavengerHuntService: ScavengerHuntService) { }

  async cancelScavenge() {
    this.alertService.PresentAlert(
      'Schnitzeljagd abbrechen?',
      [
        {
          text: 'Nein',
          role: 'cancel',
        },
        {
          text: 'Ja',
          handler: () => this.scavengerHuntService.cancelScavenge(),
        },
      ]
    );
  }
}
