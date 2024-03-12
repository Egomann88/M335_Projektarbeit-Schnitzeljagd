import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { UserHelper } from 'src/helpers/UserHelper';
// import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-huntfin',
  templateUrl: './huntfin.page.html',
  styleUrls: ['./huntfin.page.scss'],
})
export class HuntfinPage implements OnInit {

  constructor(
    private route: Router,
    private scavengerHuntService: ScavengerHuntService,
    // private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.scavengerHuntService === undefined) return;

    // TODO: User is undefined
    let name = UserHelper.getFullUserName(this.scavengerHuntService.currentScavengerHunt?.user!);
    let cutlets = this.scavengerHuntService.getAllItems("cutlets").toString();
    let potatoes = this.scavengerHuntService.getAllItems("potatoes").toString();

    // calc time
    let time = this.scavengerHuntService.getAllItems("seconds");
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 3600) % 60;

    // this.apiService.post(name, cutlets, potatoes, hours, minutes, seconds);

    this.route.navigateByUrl('/tabs');
  }
}
