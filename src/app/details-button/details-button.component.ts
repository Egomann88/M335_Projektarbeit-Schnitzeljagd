import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from "../../services/AlertService";

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.scss'],
})
export class DetailsButtonComponent {

  constructor(private alertService: AlertService) { }

  @Input() text: string = 'Keine Details definiert.';

  async showDetails() {
    await this.alertService.PresentAlert(
      'Details',
      [
        {
          text: 'Verstanden',
          role: 'cancel'
        },
      ],
      this.text,
    );
  }

}
