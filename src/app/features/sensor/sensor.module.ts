import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorPageRoutingModule } from './sensor-routing.module';

import { SensorPage } from './sensor.page';
import {WlanPageModule} from "../wlan/wlan.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SensorPageRoutingModule,
        WlanPageModule
    ],
  declarations: [SensorPage]
})
export class SensorPageModule {}
