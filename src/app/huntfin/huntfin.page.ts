import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';
import { ApiService } from 'src/services/api.service';
import { UserHelper } from 'src/helpers/UserHelper';

@Component({
  selector: 'app-huntfin',
  templateUrl: './huntfin.page.html',
  styleUrls: ['./huntfin.page.scss'],
})
export class HuntfinPage implements OnInit {

  constructor(private route: Router, private scavengerHuntService: ScavengerHuntService, private apiService: ApiService) { }

  ngOnInit() {
  }

  submit() {
    if (
      this.scavengerHuntService.currentScavengerHunt == undefined ||
      this.scavengerHuntService.currentScavengerHunt.endDate == undefined
    ) return;

    let name = UserHelper.getFullUserName(this.scavengerHuntService.currentScavengerHunt?.user!);
    let cutlets = this.scavengerHuntService.currentScavengerHunt.cutlets.toString();
    let potatoes = this.scavengerHuntService.currentScavengerHunt.potatoes.toString();
    let hours = this.scavengerHuntService.currentScavengerHunt.endDate.getHours();
    let minutes = this.scavengerHuntService.currentScavengerHunt.endDate.getMinutes();
    let seconds = this.scavengerHuntService.currentScavengerHunt.endDate.getSeconds();

    this.apiService.post(name, cutlets, potatoes, hours, minutes, seconds);

    this.route.navigateByUrl('/tabs');
  }
}
