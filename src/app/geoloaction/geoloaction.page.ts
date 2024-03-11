import { Component, NgZone, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {
  task?: Task;
  latitude: number = 0
  longitude: number = 0

  watchId: string = "";

  constructor(private zone: NgZone, private scavengerHuntService: ScavengerHuntService) { }

  options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 7000,
  };


  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;

    await this.watchPosition()
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  };

  async watchPosition() {
    this.watchId = await Geolocation.watchPosition(this.options, (position, err) => {
      if (err) {
        console.error('Error watching position:', err);
      } else {
        this.zone.run(() => {
          if (position) {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
          }
        })
      }
    });
  }

  // If you want to stop watching the position
  stopWatching() {
    Geolocation.clearWatch({ id: this.watchId });
  }
}