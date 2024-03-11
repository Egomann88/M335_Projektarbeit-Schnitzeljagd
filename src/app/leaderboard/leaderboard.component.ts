import { Component, OnInit } from '@angular/core';
import { SCAVENGERHUNTS } from "../../mocks/ScavengerHuntMock";
import { ScavengerHunt } from "../../models/ScavengerHunt";
import { ScavengerHuntService } from 'src/services/scavenger-hunt-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  scavengerHunts: ScavengerHunt[] = SCAVENGERHUNTS;
  scavengerHuntService: ScavengerHuntService;

  constructor(private _scavengerHuntService: ScavengerHuntService) {
    this.scavengerHuntService = _scavengerHuntService;
  }

  ngOnInit() { }

}
