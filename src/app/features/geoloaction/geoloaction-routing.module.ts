import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoloactionPage } from './geoloaction.page';

const routes: Routes = [
  {
    path: '',
    component: GeoloactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoloactionPageRoutingModule {}
