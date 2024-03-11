import { Component, OnInit } from '@angular/core';
import {SCAVENGERHUNTS} from "../../mocks/ScavengerHuntMock";
import {ScavengerHunt} from "../../models/ScavengerHunt";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent  implements OnInit {
  scavengerHunts: ScavengerHunt[] = SCAVENGERHUNTS;

  constructor() { }

  ngOnInit() {}

}
