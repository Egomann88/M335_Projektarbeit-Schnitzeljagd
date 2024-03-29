import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { GeolocationServiceService } from 'src/services/geolocation-service.service'

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {
  task?: Task;

  constructor(
    private scavengerHuntService: ScavengerHuntService,
    public geolocationService: GeolocationServiceService
  ) { }

  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;
    await this.geolocationService.resetService();
    await this.geolocationService.watchPosition(false);
  }

  async completed() {
    await this.geolocationService.resetService();
    await this.scavengerHuntService.completeTask();
  }

  async getCurrentPosition() {
    await this.geolocationService.getCurrentPosition(false);
  }
}
