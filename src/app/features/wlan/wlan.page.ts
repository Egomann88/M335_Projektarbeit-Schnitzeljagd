import { Component, NgZone, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-wlan',
  templateUrl: './wlan.page.html',
  styleUrls: ['./wlan.page.scss'],
})

export class WlanPage implements OnInit {
  task?: Task;
  networkStatus: boolean = false;
  joinedWith: boolean = false;
  changed: boolean = false;

  constructor(private zone: NgZone, private scavengerHuntService: ScavengerHuntService) { }

  async ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;

    // Add a listener to the network status
    Network.addListener('networkStatusChange', status => {
      try {
        this.zone.run(() => {
          this.networkStatus = status.connected;
          this.changed = true;
        })
      } catch (err) {
        console.error(err);
      }
    });
    // Get the current network status
    await this.getCurrentStatus();
  }

  async completed() {
    await this.scavengerHuntService.completeTask()
  }

  // Get the current network status
  getCurrentStatus = async () => {
    const status = await Network.getStatus();
    this.networkStatus = status.connected;
    this.joinedWith = status.connected;
  }

  // Sets the color of the WI-FI icon
  getWifiColor() {
    if (this.networkStatus) return 'success';

    return 'danger';
  }

  getNextMessage() {
    // If the user changed the network status two times, the task is finished
    if (this.changed && (this.joinedWith == this.networkStatus)) this.finishedTask();
  }

  // Placeholder for what should happen after the task is finished
  finishedTask() {
    console.log("Task finished");
  }
}
