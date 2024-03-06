import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from '../services/AlertService';

@NgModule({
  // components
  declarations: [AppComponent],
  // moudles
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  // services?
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AlertService],
  bootstrap: [AppComponent],
})
export class AppModule { }
