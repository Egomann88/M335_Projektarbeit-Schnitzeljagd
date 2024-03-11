import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'geoloaction',
    loadChildren: () => import('./features/geoloaction/geoloaction.module').then(m => m.GeoloactionPageModule)
  },
  {
    path: 'wlan',
    loadChildren: () => import('./features/wlan/wlan.module').then(m => m.WlanPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./features/qr-code/qr-code.module').then(m => m.QrCodePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
  },
  {
    path: 'device-status',
    loadChildren: () => import('./features/device-status/device-status.module').then( m => m.DeviceStatusPageModule)
  },
  {
    path: 'distance',
    loadChildren: () => import('./features/distance/distance.module').then( m => m.DistancePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
