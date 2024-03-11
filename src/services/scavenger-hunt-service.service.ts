import { Injectable } from '@angular/core';
import { ScavengerHunt, taskUrls } from "../models/ScavengerHunt";
import { User } from "../models/User";
import { Task } from "../models/task";
import { Router } from "@angular/router";
import { Haptics } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class ScavengerHuntService {
  currentScavengerHunt?: ScavengerHunt;
  currentTask?: Task;
  currentIndex: number = 0;
  constructor(private route: Router) { }

  startScavenge(user: User) {
    this.currentScavengerHunt = new ScavengerHunt(new Date(), user);
    this.currentTask = this.currentScavengerHunt.tasks[this.currentIndex];
    this.currentTask.start();

    // navigate to first task
    this.navigateToNextTask();
  }

  async completeTask() {
    if (this.currentTask == undefined || this.currentScavengerHunt == undefined) return;
    await Haptics.vibrate();

    this.currentTask.completeTask();
    this.currentTask = this.currentScavengerHunt.tasks[++this.currentIndex];
    this.currentTask.start();
    this.navigateToNextTask();
  }

  navigateToNextTask() {
    if (this.currentTask == undefined) return;

    let currentId = this.currentTask.id;
    let url: string = taskUrls[currentId];
    this.route.navigate([url]);
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
  }

  cancelScavenge() {
    this.currentScavengerHunt = undefined;
    this.currentTask = undefined;
    this.currentIndex = 0;
    this.route.navigateByUrl('/tabs');
  }

  getAllCutlets() {
    if (this.currentScavengerHunt == undefined) return 0;

    let cutlets: number = 0;

    this.currentScavengerHunt.tasks.forEach(task => {
      if (task.isCompleted) {
        cutlets += task.steaks;
      }
    });

    return cutlets;
  }

  getAllPotatoes() {
    if (this.currentScavengerHunt == undefined) return 0;

    let potatoes: number = 0;

    this.currentScavengerHunt.tasks.forEach(task => {
      if (task.isCompleted) {
        potatoes += task.potatoes;
      }
    });

    return potatoes;
  }

  getTotalTimeSeconds() {
    if (this.currentScavengerHunt == undefined) return 0;

    let totalTime: number = 0;

    this.currentScavengerHunt.tasks.forEach(task => {
      if (task.isCompleted) {
        totalTime += task.timeEnd!.getSeconds() - task.timeStart!.getSeconds();
      }
    });

    return totalTime;
  }
}
