import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSettingsPage } from './tabSettings.page';

import { TabSettingsPageRoutingModule } from './tabSettings-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabSettingsPageRoutingModule],
  declarations: [TabSettingsPage],
})
export class TabSettingsPageModule { }
