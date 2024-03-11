import { Injectable } from '@angular/core';
import { ScavengerHunt, taskUrls } from "../models/ScavengerHunt";
import { User } from "../models/User";
import { Task } from "../models/task";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ScavengerHuntService {
  currentScavengerHunt?: ScavengerHunt;
  currentTask?: Task;
  currentIndex: number = 0;
  constructor(private route: Router) { }

  startScavenge(user: User) {
    this.currentScavengerHunt = new ScavengerHunt(new Date(), 0, 0, user);
    this.currentTask = this.currentScavengerHunt.tasks[this.currentIndex];

    // navigate to first task
    this.navigateToNextTask();
  }

  completeTask() {
    if (this.currentTask == undefined) return;

    this.currentTask.completeTask();
    this.currentTask = this.currentScavengerHunt?.tasks[++this.currentIndex];
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
}
