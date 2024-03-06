import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {

  latitude: number = 0
  longitude: number = 0

  watchId: string = "";

  constructor() {
  }

  options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 7000,
  };


  async ngOnInit() {
    await Geolocation.requestPermissions()
    await this.watchPosition()
  }

  async watchPosition() {
    this.watchId = await Geolocation.watchPosition(this.options, (position, err) => {
      if (err || position == undefined) {
        console.error('Error watching position:', err);
      } else {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
      }
    });
  }

  // If you want to stop watching the position
  stopWatching() {
    Geolocation.clearWatch({ id: this.watchId });
  }
}
