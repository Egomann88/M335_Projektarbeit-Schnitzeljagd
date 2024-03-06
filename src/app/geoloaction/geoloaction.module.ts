import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoloactionPageRoutingModule } from './geoloaction-routing.module';

import { GeoloactionPage } from './geoloaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoloactionPageRoutingModule
  ],
  declarations: [GeoloactionPage]
})
export class GeoloactionPageModule {}
