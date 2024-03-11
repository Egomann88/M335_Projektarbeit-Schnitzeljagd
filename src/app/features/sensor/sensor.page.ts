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

  constructor(private alertService: AlertService, private scavengerHuntService: ScavengerHuntService) { }

  ngOnInit() {
    this.task = this.scavengerHuntService.currentTask;
    console.log(this.task)

    let accelHandler: PluginListenerHandle;

    accelHandler = Motion.addListener('accel', event => {
      // Annahme: Die horizontale Drehung wird durch die X-Achse repräsentiert.
      let x = event.acceleration.x;

      // x ist die horizontale Drehung
      this.rotationHorizontal += x;
      console.log(this.rotationHorizontal);

      // Überprüfen, ob der Benutzer das Handy um 180 Grad gedreht hat
      if (Math.abs(this.rotationHorizontal) >= 180) {
        console.log("Task completed");
        // Füge hier deinen Code für die abgeschlossene Aufgabe hinzu
        // Beispiel: this.scavengerHuntService.completeTask();

        // Zurücksetzen der Rotation für weitere Überprüfungen
        this.rotationHorizontal = 0;
      }
    });

  }



}
