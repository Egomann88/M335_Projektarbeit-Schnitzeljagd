import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuntfinPage } from './huntfin.page';

const routes: Routes = [
  {
    path: '',
    component: HuntfinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuntfinPageRoutingModule {}
