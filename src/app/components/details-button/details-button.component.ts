import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from "../../services/AlertService";
import { TaskDetails } from 'src/models/taskDetails';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.scss'],
})
export class DetailsButtonComponent {

  constructor(private alertService: AlertService) { }

  @Input() details: TaskDetails = new TaskDetails('Details', 'Keine Details definiert.');

  async presentDetails() {
    await this.alertService.PresentAlert(
      this.details.title,
      ['Verstanden'],
      this.details.desc,
    );
  }

}
