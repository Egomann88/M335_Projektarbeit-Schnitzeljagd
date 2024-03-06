import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabHomePage } from './tabHome.page';

import { TabHomePageRoutingModule } from './tabHome-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabHomePageRoutingModule],
  declarations: [TabHomePage],
})
export class TabHomePageModule { }
