import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoloactionPageRoutingModule } from './geoloaction-routing.module';

import { GeoloactionPage } from './geoloaction.page';
import {WlanPageModule} from "../wlan/wlan.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoloactionPageRoutingModule,
    WlanPageModule
  ],
  declarations: [GeoloactionPage]
})
export class GeoloactionPageModule {}
