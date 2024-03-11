import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuntfinPageRoutingModule } from './huntfin-routing.module';

import { HuntfinPage } from './huntfin.page';
import { WlanPageModule } from '../features/wlan/wlan.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuntfinPageRoutingModule,
    WlanPageModule
  ],
  declarations: [HuntfinPage]
})
export class HuntfinPageModule { }
