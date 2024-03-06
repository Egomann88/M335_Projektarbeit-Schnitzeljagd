import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodePageRoutingModule } from './qr-code-routing.module';

import { QrCodePage } from './qr-code.page';
import {WlanPageModule} from "../wlan/wlan.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QrCodePageRoutingModule,
        WlanPageModule
    ],
  declarations: [QrCodePage]
})
export class QrCodePageModule {}
