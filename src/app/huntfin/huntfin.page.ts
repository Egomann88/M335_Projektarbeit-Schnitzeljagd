import { Component, OnInit } from '@angular/core';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { UserHelper } from 'src/helpers/UserHelper';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-huntfin',
  templateUrl: './huntfin.page.html',
  styleUrls: ['./huntfin.page.scss'],
})
export class HuntfinPage implements OnInit {
  svHunt?: ScavengerHunt;

  constructor(public scavengerHuntService: ScavengerHuntService, private apiService: ApiService) { }

  ngOnInit() {
    this.svHunt = this.scavengerHuntService.currentScavengerHunt;
  }

  submit() {
    if (this.svHunt === undefined) return;

    // TODO: User is undefined
    let name = UserHelper.getFullUserName(this.svHunt.user);
    let cutlets = this.svHunt.cutlets.toString();
    let potatoes = this.svHunt.potatoes.toString();

    // calc time
    let time = this.svHunt.seconds;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 3600) % 60;

    this.apiService.post(name, cutlets, potatoes, hours, minutes, seconds);

    this.scavengerHuntService.saveScavenge();
  }

  getRanking() {
    let scavanegerHunts = this.scavengerHuntService.getAllScavengerHunts();

    if (scavanegerHunts.length === 0) return "1.";  // first if no other hunts are available
    scavanegerHunts.sort((a, b) => a.seconds - b.seconds);  // sort by time

    // calc rank
    for (let i = 0; i < scavanegerHunts.length; i++) {
      let hunt = scavanegerHunts[i];
      if (hunt.seconds > this.svHunt?.seconds!) return (i + 1) + "."; // any rank
    }

    return scavanegerHunts.length + ".";  // last if no other hunts are faster
  }
}
