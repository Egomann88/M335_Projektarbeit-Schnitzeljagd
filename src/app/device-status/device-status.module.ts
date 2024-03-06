import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceStatusPageRoutingModule } from './device-status-routing.module';

import { DeviceStatusPage } from './device-status.page';
import {WlanPageModule} from "../wlan/wlan.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeviceStatusPageRoutingModule,
        WlanPageModule
    ],
  declarations: [DeviceStatusPage]
})
export class DeviceStatusPageModule {}
