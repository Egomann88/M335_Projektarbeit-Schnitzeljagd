import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { coords, haversineDistance } from "../utils/geolocation.utils";
import { ScavengerHuntService } from "./scavenger-hunt-service.service";

@Injectable({
  providedIn: 'root'
})
export class GeolocationServiceService {
  // for geolocation
  public distance: number = 100000;
  public currentLocation: coords = new coords(0, 0)
  public distanceReached: boolean = false;
  private destinationLatitude: number = 47.071652;
  private destinationLongitude: number = 8.348674;
  private targetDistance: number = 15;

  //for distance
  public metresTraveled: number = 0;
  public targetMetres: number = 100;
  private lastLocation: coords = new coords(0, 0)
  public metresReached: boolean = false;

  private finishedTask: boolean = false;

  watchId: string = "";

  constructor(private zone: NgZone, private scavengerHuntService: ScavengerHuntService) {

  }

  options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 7000,
  };

  public checkDistance() {
    return this.distance < this.targetDistance
  }

  public checkMetres() {
    return this.metresTraveled > this.targetMetres
  }

  public async resetService() {
    await this.stopWatching();
    this.currentLocation = new coords(0, 0);
    this.lastLocation = new coords(0, 0);
    this.metresTraveled = 0;
    this.watchId = "";
    this.finishedTask = false;
  }

  public async getCurrentPosition(isDistanceFeature: boolean) {
    const position = await Geolocation.getCurrentPosition();
    // for distance
    await this.checkLocation(position, isDistanceFeature)
  };

  public async watchPosition(isDistanceFeature: boolean) {
    this.watchId = await Geolocation.watchPosition(this.options, (position, err) => {
      if (err) {
        console.error('Error watching position:', err);
      } else {
        this.zone.run(async () => {
          await this.checkLocation(position, isDistanceFeature)
        })
      }
    });
  }

  private async checkLocation(position: Position | null, isDistanceFeature: boolean) {
    if (position) {
      // for distance
      if (isDistanceFeature) {
        try {
          this.updateLastLocation(position.coords.latitude, position.coords.longitude)
          this.calculateDistance(true)
          if (this.currentLocation.longitude != 0)
            this.metresReached = this.checkMetres()

          if (this.metresReached && !this.finishedTask) {
            this.finishedTask = true;
            await this.scavengerHuntService.completeTask()
          }
        } catch (e: any) {
          console.error("Cannot calculate metres traveled")
        }
      }


      // for geolocation
      this.currentLocation.longitude = position.coords.longitude;
      this.currentLocation.latitude = position.coords.latitude;
      this.calculateDistance(false);
      this.distanceReached = this.checkDistance()

      if (!isDistanceFeature && this.distanceReached && !this.finishedTask) {
        this.finishedTask = true;
        await this.scavengerHuntService.completeTask()
      }
    }
  }

  private updateLastLocation(latitude: number, longitude: number) {
    this.lastLocation.latitude = latitude;
    this.lastLocation.longitude = longitude;
  }

  public async initialCheckForMetres() {
    if (this.currentLocation.latitude == 0) {
      const coordinates = await Geolocation.getCurrentPosition();
      this.currentLocation.latitude = coordinates.coords.latitude;
      this.currentLocation.longitude = coordinates.coords.longitude;
    }
  }

  private calculateDistance(isDistance: boolean) {
    if (isDistance) {
      this.metresTraveled += haversineDistance(this.currentLocation, this.lastLocation);
      return
    }

    let destinationCoords = new coords(this.destinationLatitude, this.destinationLongitude)
    this.distance = haversineDistance(destinationCoords, this.currentLocation);
  }

  // If you want to stop watching the position
  public async stopWatching() {
    if (this.watchId != "")
      await Geolocation.clearWatch({ id: this.watchId });
  }
}
