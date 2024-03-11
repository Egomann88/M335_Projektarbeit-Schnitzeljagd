import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlanPageRoutingModule } from './wlan-routing.module';

import { WlanPage } from './wlan.page';
import {DetailsButtonComponent} from "../../components/details-button/details-button.component";
import {TaskHeaderComponent} from "../../components/task-header/task-header.component";
import {DevButtonComponent} from "../../components/dev-button/dev-button.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WlanPageRoutingModule
    ],
    exports: [
        DetailsButtonComponent,
        TaskHeaderComponent,
        DevButtonComponent
    ],
    declarations: [WlanPage, DetailsButtonComponent, TaskHeaderComponent, DevButtonComponent]
})
export class WlanPageModule {}
