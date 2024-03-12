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
  scavanegerHunts: ScavengerHunt[] = [];
  currentScavengerHunt?: ScavengerHunt;
  currentTask?: Task;
  currentIndex: number = 0;
  permissionsChecked: boolean = false;

  constructor(private route: Router, private toastService: ToastService) { }

  startScavenge(user?: User) {
    if (user != undefined) this.currentScavengerHunt = new ScavengerHunt(new Date(), user);

    if (!this.permissionsChecked) {
      this.route.navigateByUrl("/permissions")
      return;
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
    this.updateStats(); // update cutlets, potatoes and seconds
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

  cancelScavenge(showToast: boolean = true) {
    let timeout = showToast ? 800 : 0;

    this.currentTask?.completeTask()
    this.currentTask = undefined;
    this.currentScavengerHunt = undefined;
    this.currentIndex = 0;


    setTimeout(() => {
      if (showToast) this.toastService.presentToast("Schnitzeljagd abgebrochen", "danger", 800);
      this.route.navigate(['/tabs/tabHome']);
    }, timeout);
  }

  updateStats() {
    if (this.currentScavengerHunt == undefined) return;

    this.currentScavengerHunt.cutlets = this.getAllItems("cutlets");
    this.currentScavengerHunt.potatoes = this.getAllItems("potatoes");
    this.currentScavengerHunt.seconds = this.getAllItems("seconds");
  }

  saveScavenge() {
    this.updateStats();

    if (this.currentScavengerHunt == undefined) return;

    this.scavanegerHunts.push(this.currentScavengerHunt); // save current hunt
    this.cancelScavenge(false);  // reset current hunt
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

  public getAllScavengerHunts(): ScavengerHunt[] {
    return this.scavanegerHunts;
  }
}
