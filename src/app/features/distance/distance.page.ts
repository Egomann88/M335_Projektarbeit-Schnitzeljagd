import { Component, OnInit } from '@angular/core';
import { ScavengerHuntService } from "../../../services/scavenger-hunt-service.service";
import { GeolocationServiceService } from "../../../services/geolocation-service.service";
import { Task } from "../../../models/task";

@Component({
  selector: 'app-distance',
  templateUrl: './distance.page.html',
  styleUrls: ['./distance.page.scss'],
})
export class DistancePage implements OnInit {
  task?: Task;
  constructor(
    private scavengerHuntService: ScavengerHuntService,
    public geolocationService: GeolocationServiceService
  ) { }

  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;
    await this.geolocationService.resetService();
    await this.geolocationService.initialCheckForMetres();
    await this.geolocationService.watchPosition();
  }

  async completed() {
    await this.scavengerHuntService.completeTask()
  }

  async getCurrentPosition() {
    await this.geolocationService.getCurrentPosition()
  }
}
