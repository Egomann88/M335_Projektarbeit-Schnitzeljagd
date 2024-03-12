import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/services/AlertService';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { Motion } from '@capacitor/motion';
import { PluginListenerHandle } from "@capacitor/core";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {
  task?: Task;
  rotationHorizontal: number = 0;
  isCompleted: boolean = false;

  constructor(private alertService: AlertService, private scavengerHuntService: ScavengerHuntService) { }

  ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;
    this.isCompleted = false;

    let accelHandler: PluginListenerHandle;

    accelHandler = Motion.addListener('orientation', async event => {

      // x ist die horizontale Drehung
      this.rotationHorizontal = Math.round(event.alpha);

      if (this.rotationHorizontal >= 160 && this.rotationHorizontal <= 190) {
        if (!this.isCompleted) {
          this.isCompleted = true;
          await this.completed()
        }
      }
    });
  }

  async completed() {
    await this.scavengerHuntService.completeTask();
  }
}
