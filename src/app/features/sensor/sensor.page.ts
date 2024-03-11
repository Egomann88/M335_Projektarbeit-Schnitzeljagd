import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/services/AlertService';
import { Task } from 'src/models/task';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { Motion } from '@capacitor/motion';
import {PluginListenerHandle} from "@capacitor/core";

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
    console.log(this.task)

    let accelHandler: PluginListenerHandle;

    accelHandler = Motion.addListener('orientation', event => {

      // x ist die horizontale Drehung
      this.rotationHorizontal = Math.round(event.alpha);
      console.log(this.rotationHorizontal);

      // Überprüfen, ob der Benutzer das Handy um 180 Grad gedreht hat
      if (this.rotationHorizontal >= 160 && this.rotationHorizontal <= 190) {
        console.log("Task completed");
        // Füge hier deinen Code für die abgeschlossene Aufgabe hinzu
        // Beispiel: this.scavengerHuntService.completeTask();
        this.isCompleted = true;
        // Zurücksetzen der Rotation für weitere Überprüfungen
      }
    });

  }



}
