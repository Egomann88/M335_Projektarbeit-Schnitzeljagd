import { Component } from '@angular/core';
import { ScavengerHuntService } from "../../../services/scavenger-hunt-service.service";

@Component({
  selector: 'app-task-time',
  templateUrl: './task-time.component.html',
  styleUrls: ['./task-time.component.scss'],
})
export class TaskTimeComponent {

  constructor(public scavangeHuntService: ScavengerHuntService) { }

  getTime() {
    if(this.scavangeHuntService.currentTask == undefined) return;

    if(this.scavangeHuntService.currentTask.seconds >= 60) {
      return Math.floor(this.scavangeHuntService.currentTask.seconds / 60) + ' min ' +
      (this.scavangeHuntService.currentTask.seconds % 60) + ' s';
    }
    
    return this.scavangeHuntService.currentTask.seconds + ' s';
  }
}
