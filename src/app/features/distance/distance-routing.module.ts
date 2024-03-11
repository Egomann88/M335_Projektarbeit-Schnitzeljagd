import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistancePage } from './distance.page';

const routes: Routes = [
  {
    path: '',
    component: DistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistancePageRoutingModule {}
