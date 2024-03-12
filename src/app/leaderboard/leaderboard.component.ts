import { Component, OnInit } from '@angular/core';
import { ScavengerHunt } from "../../models/ScavengerHunt";
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  scavengerHunts: ScavengerHunt[] = [];

  constructor(public scavengerHuntService: ScavengerHuntService) { }

  ngOnInit() {
    this.scavengerHunts = this.scavengerHuntService.getAllScavengerHunts();
  }
}
