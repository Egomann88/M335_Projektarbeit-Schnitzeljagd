import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WlanPage } from './wlan.page';

const routes: Routes = [
  {
    path: '',
    component: WlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WlanPageRoutingModule {}
