import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlanPageRoutingModule } from './wlan-routing.module';

import { WlanPage } from './wlan.page';
import {DetailsButtonComponent} from "../details-button/details-button.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WlanPageRoutingModule
  ],
  declarations: [WlanPage, DetailsButtonComponent]
})
export class WlanPageModule {}
