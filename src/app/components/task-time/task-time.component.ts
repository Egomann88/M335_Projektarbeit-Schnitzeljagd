import { Component, OnInit } from '@angular/core';
import {ScavengerHuntService} from "../../../services/scavenger-hunt-service.service";

@Component({
  selector: 'app-task-time',
  templateUrl: './task-time.component.html',
  styleUrls: ['./task-time.component.scss'],
})
export class TaskTimeComponent {

  constructor(public scavangeHuntService: ScavengerHuntService) { }

}
