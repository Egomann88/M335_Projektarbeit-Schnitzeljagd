import { Component, NgZone, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { GeolocationServiceService } from 'src/services/geolocation-service.service'
import {Haptics} from "@capacitor/haptics";

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {
  task?: Task;

  constructor(
    private zone: NgZone,
    private scavengerHuntService: ScavengerHuntService,
    public geolocationService: GeolocationServiceService
  ) { }

  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;
    await this.geolocationService.resetService();
    await this.geolocationService.watchPosition();
  }

  async completed(){
    await Haptics.vibrate();
  }

  async getCurrentPosition(){
    await this.geolocationService.getCurrentPosition()
  }
}
