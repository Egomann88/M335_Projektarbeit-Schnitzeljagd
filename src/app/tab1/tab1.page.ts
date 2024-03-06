import { Component } from '@angular/core';
import { ScavengerHunt } from 'src/models/ScavengerHunt';
import { SCAVENGERHUNTS } from 'src/mocks/ScavengerHuntMock';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  scavengerHunts: ScavengerHunt[] = SCAVENGERHUNTS;

  constructor() { }
}
