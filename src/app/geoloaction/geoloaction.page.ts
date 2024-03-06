import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geoloaction',
  templateUrl: './geoloaction.page.html',
  styleUrls: ['./geoloaction.page.scss'],
})
export class GeoloactionPage implements OnInit {

  langitude: number = 0
  longitude: number = 0
  constructor() {
  }

  async ngOnInit() {
    await Geolocation.requestPermissions()
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
  };

}
