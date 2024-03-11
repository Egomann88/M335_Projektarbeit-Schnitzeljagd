import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@capacitor/geolocation";
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.page.html',
  styleUrls: ['./permissions.page.scss'],
})
export class PermissionsPage implements OnInit {

  geoLocationPermission: boolean = false;
  geoCoarsePermission: boolean = false;

  cameraBarcodePermission: boolean = false;

  error: string = "";

  constructor() { }

  async ngOnInit() {
    await this.checkGeoPermission();
  }

  async checkGeoPermission() {
    try {
      const result = await Geolocation.checkPermissions();
      if (result.location === "granted") {
        this.geoLocationPermission = true;
      }
      if (result.location === "granted" || result.location === "prompt") {
        this.geoCoarsePermission = true;
      }
    } catch (e) {
      console.log(e);
      this.error = "Überprüfe ob deine Standortdienste aktiviert sind.";
    }
  }

  async checkCameraPermission() {
    try {
      const result = await BarcodeScanner.checkPermissions();
      if (result.camera === "granted") {
        this.cameraBarcodePermission = true;
      }
    } catch (e) {
      console.log(e);
      this.error = "Überprüfe ob deine Kamera aktiviert ist.";
    }
  }

  async requestCameraPermission() {
    const result = await BarcodeScanner.requestPermissions();
    await this.checkCameraPermission();
  }

  async requestGeoPermission() {
    const result = await Geolocation.requestPermissions();
    await this.checkGeoPermission();
  }

}
