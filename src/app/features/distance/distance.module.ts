import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistancePageRoutingModule } from './distance-routing.module';

import { DistancePage } from './distance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistancePageRoutingModule
  ],
  declarations: [DistancePage]
})
export class DistancePageModule {}
