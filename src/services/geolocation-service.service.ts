import {Injectable, NgZone} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import {coords, haversineDistance} from "../utils/geolocation.utils";

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {
  public latitude: number = 0
  public longitude: number = 0
  public distance : number = 100000;
  public distanceReached: boolean = false;

  private destinationLatitude: number = 47.071610;
  private destinationLongitude: number = 8.348653;
  private targetDistance: number = 10;

  watchId: string = "";

  constructor(private zone: NgZone) { }

  options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 7000,
  };

  public checkDistance(){
    return this.distance < this.targetDistance
  }

  public async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    this.calculateDistance();
    this.distanceReached = this.checkDistance()
  };

  public async watchPosition() {
    this.watchId = await Geolocation.watchPosition(this.options, (position, err) => {
      if (err) {
        console.error('Error watching position:', err);
      } else {
        this.zone.run(() => {
          if (position) {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.calculateDistance();
            this.distanceReached = this.checkDistance()
          }
        })
      }
    });
  }

  private calculateDistance(){
    let destinationCoords = new coords(this.destinationLatitude, this.destinationLongitude)
    let currentCoords = new coords(this.latitude, this.longitude)
    this.distance = haversineDistance(destinationCoords, currentCoords);
  }

  // If you want to stop watching the position
  public stopWatching() {
    Geolocation.clearWatch({ id: this.watchId });
  }
}
