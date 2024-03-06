import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'geoloaction',
    loadChildren: () => import('./geoloaction/geoloaction.module').then(m => m.GeoloactionPageModule)
  },
  {
    path: 'wlan',
    loadChildren: () => import('./wlan/wlan.module').then( m => m.WlanPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestPageModule)
  },  {
    path: 'device-status',
    loadChildren: () => import('./device-status/device-status.module').then( m => m.DeviceStatusPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
