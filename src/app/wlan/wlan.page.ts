import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-wlan',
  templateUrl: './wlan.page.html',
  styleUrls: ['./wlan.page.scss'],
})

export class WlanPage implements OnInit {

  networkStatus: boolean = false;
  joinedWith: boolean = false;
  changed: boolean = false;

  activateWlan: string = "Verbinden Sie sich mit dem Kurs WI-FI."
  deactivateWlan: string = "Trennen Sie Ihr WI-FI"


  constructor() {
  }


  async ngOnInit() {

    // Add a listener to the network status
    Network.addListener('networkStatusChange', status => {
      this.networkStatus = status.connected;
      this.changed = true;
    });

    // Get the current network status
    await this.getCurrentStatus();

  }

  // Get the current network status
  getCurrentStatus = async () => {
    const status = await Network.getStatus();
    this.networkStatus = status.connected;
    this.joinedWith = status.connected;
  }

  // Sets the color of the WI-FI icon
  getWifiColor() {
    if (this.networkStatus) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  getNextMessage() {
    // If the user changed the network status two times, the task is finished
    if (this.changed && (this.joinedWith == this.networkStatus)) {
      this.finishedTask();
      return ""
    }

    // If the user has changed the network status, the message will be updated
    if (this.networkStatus) {
      return this.deactivateWlan
    } else {
      return this.activateWlan
    }
  }

  // Placeholder for what should happen after the task is finished
  finishedTask() {
    console.log("Task finished");
  }

}
