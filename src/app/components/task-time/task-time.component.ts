import { Component } from '@angular/core';
import { ScavengerHuntService } from "../../../services/scavenger-hunt-service.service";
import { GetTimeHelper } from "src/helpers/getTime.helper";

@Component({
  selector: 'app-task-time',
  templateUrl: './task-time.component.html',
  styleUrls: ['./task-time.component.scss'],
})
export class TaskTimeComponent {

  constructor(public scavangeHuntService: ScavengerHuntService) { }

  getTime() {
    if (this.scavangeHuntService.currentTask == undefined) return;

    return GetTimeHelper.getTime(this.scavangeHuntService.currentTask);
  }
}
