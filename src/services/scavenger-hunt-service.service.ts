import { Injectable } from '@angular/core';
import { ScavengerHunt, taskUrls } from "../models/ScavengerHunt";
import { User } from "../models/User";
import { Task } from "../models/task";
import { Router } from "@angular/router";
import { Haptics } from '@capacitor/haptics';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ScavengerHuntService {
  currentScavengerHunt?: ScavengerHunt;
  currentTask?: Task;
  currentIndex: number = 0;
  permissionsChecked: boolean = false;

  constructor(private route: Router, private toastService: ToastService) { }

  startScavenge(user?: User) {
    if (user != undefined) this.currentScavengerHunt = new ScavengerHunt(new Date(), user);

    if (!this.permissionsChecked) {
      // this.route.navigateByUrl("/permissions")
    }

    if (this.currentScavengerHunt == undefined) return;

    this.currentTask = this.currentScavengerHunt.tasks[this.currentIndex];
    this.currentTask.start();

    // navigate to first task
    this.navigateToNextTask();
  }

  async completeTask() {
    if (this.currentTask == undefined || this.currentScavengerHunt == undefined) return;
    await Haptics.vibrate();
    this.currentTask.completeTask();  // stops timer
    this.toastService.presentToast("Aufgabe abgeschlossen", "success", 800);

    setTimeout(() => {
      if (this.currentScavengerHunt == undefined) return;

      if (this.huntCompleted()) { // if all tasks are completed
        this.route.navigate(['huntfin']);
        return;
      }

      // hunt not completed, navigate to next task
      this.currentTask = this.currentScavengerHunt.tasks[++this.currentIndex];
      this.currentTask.start(); // start next timer
      this.navigateToNextTask();
    }, 800);

  }

  navigateToNextTask() {
    if (this.currentTask == undefined) return;

    let currentId = this.currentTask.id;
    let url: string = taskUrls[currentId];
    this.route.navigate([url]);
  }

  public PermissionsChecked() {
    this.permissionsChecked = true;
  }

  huntCompleted() {
    // if all tasks are completed, return true
    let isCompleted: boolean = true;
    this.currentScavengerHunt!.tasks.forEach(task => {
      if (task.isCompleted == false) {
        isCompleted = false;
        return;
      }
    });
    return isCompleted;
  }

  cancelScavenge() {
    this.currentScavengerHunt = undefined;
    this.currentTask = undefined;
    this.currentIndex = 0;
    this.route.navigateByUrl('/tabs');
  }

  getAllItems(itemType: string): number {
    if (this.currentScavengerHunt == undefined) return 0;

    let count: number = 0;

    this.currentScavengerHunt.tasks.forEach(task => {
      if (task.isCompleted) {
        switch (itemType) {
          case 'cutlets':
            count += task.steaks;
            break;
          case 'potatoes':
            count += task.potatoes;
            break;
          case 'seconds':
            count += task.timeEnd!.getSeconds() - task.timeStart!.getSeconds();
            break;
        }
      }
    });

    return count;
  }
}
