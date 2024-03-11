import { Component, OnInit } from '@angular/core';
import { Device } from "@capacitor/device";
import { batteryCharging } from "ionicons/icons";
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.page.html',
  styleUrls: ['./device-status.page.scss'],
})
export class DeviceStatusPage implements OnInit {
  task?: Task;
  loadingField: number = 0;
  loadingStatus: boolean | undefined = false;
  chargingLevel: number | undefined = 0;
  loadingDone: boolean = false;

  constructor(public scavengerHuntService: ScavengerHuntService) { }

  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;

    await this.lifecycle();
  }

  // Lifecycle of the loading bar
  async lifecycle() {

    const interval = setInterval(async () => {
      try {
        const info = await Device.getBatteryInfo();

        this.loadingStatus = info.isCharging;
        this.chargingLevel = info.batteryLevel;

        // if the charging level is not undefined, remove the decimal point
        if (this.chargingLevel !== undefined) this.chargingLevel = this.chargingLevel * 100;

        if (info.isCharging) {
          this.loadingField += 0.05;
        }

        if (this.loadingField >= 2) {
          clearInterval(interval);
          this.finishedTask();
        }
      } catch (err) {
        console.error(err)
      }
    }, 500);
  }

  // Sets the color of the loading bar using a float
  getColorIteration(index: number) {
    if (index <= this.loadingField) {
      return 'success';
    }
    return 'danger';
  }

  // Sets a static color using boolean values
  getColor() {
    if (this.loadingDone) return 'success';

    if (this.loadingStatus) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  // Sets the text of the loading bar
  getLoadingText() {
    if (this.loadingDone) return 'Ladevorgang abgeschlossen';

    if (this.loadingStatus) {
      return 'Ladevorgang läuft...';
    } else {
      return 'Kein Ladegerät angeschlossen';
    }

  }

  // Task is finished
  finishedTask() {
    this.loadingDone = true;
    console.log("Task finished");
  }


  protected readonly batteryCharging = batteryCharging;
}