import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceStatusPage } from './device-status.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceStatusPageRoutingModule {}
