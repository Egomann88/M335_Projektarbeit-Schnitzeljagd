import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@capacitor/geolocation";
import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";
import {ScavengerHuntService} from "../../services/scavenger-hunt-service.service";

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.page.html',
  styleUrls: ['./permissions.page.scss'],
})
export class PermissionsPage implements OnInit {

  geoLocationPermission: boolean = false;
  geoCoarsePermission: boolean = false;
  geoError: string = "";

  cameraBarcodePermission: boolean = false;
  cameraError: string = "";

  constructor(private scavangeHunt: ScavengerHuntService) { }

  async ngOnInit() {
    await this.checkGeoPermission();
    await this.checkCameraPermission();
  }

  async startHunt(){
    this.scavangeHunt.permissionsChecked = true;
    this.scavangeHunt.startScavenge();
  }

  async checkGeoPermission() {
    try {
      const result = await Geolocation.checkPermissions();
      if (result.location === "granted") {
        this.geoLocationPermission = true;
      } else if (result.location === "denied") {
        this.geoError = "Die Berechtigung wurde verweigert. Bitte erlaube den Zugriff auf deinen Standort.";
      }

      if (result.location === "granted") {
        this.geoCoarsePermission = true;
      } else if (result.location === "denied") {
        this.geoError = "Die Berechtigung wurde verweigert. Bitte erlaube den Zugriff auf deinen Standort.";
      }
    } catch (e) {
      console.error(e);
      this.geoError = "Überprüfe ob deine Standortdienste aktiviert sind.";
    }
  }

  async checkCameraPermission() {
    try {
      const result = await BarcodeScanner.checkPermissions();
      if (result.camera === "granted") {
        this.cameraBarcodePermission = true;
      } else {
        this.cameraError = "Die Berechtigung wurde verweigert. Bitte erlaube den Zugriff auf die Kamera.";
      }
    } catch (e) {
      console.error(e);
      this.cameraError = "Es ist ein Fehler aufgetreten. Bitte versuche es erneut."
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
