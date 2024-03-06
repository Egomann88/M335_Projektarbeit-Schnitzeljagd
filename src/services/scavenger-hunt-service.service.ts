import { Injectable } from '@angular/core';
import {ScavengerHunt, taskUrls} from "../models/ScavengerHunt";
import {User} from "../models/User";
import {Task} from "../models/task";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ScavengerHuntServiceService {
  private currentScavengerHunt? : ScavengerHunt;
  private currentTask? : Task;
  constructor(private route: Router) { }

  startScavenge(user: User){
    let startDate = new Date();
    this.currentScavengerHunt = new ScavengerHunt(startDate, 0, 0, user);
    this.currentTask = this.currentScavengerHunt.tasks[0];
  }

  navigateToNextTask(){
    if(this.currentTask == undefined)
      return
    let currentId = this.currentTask.id
    let url: string = taskUrls[currentId]
    this.route.navigate([url])
  }
}
