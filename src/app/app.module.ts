import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// kinto 
// import Kinto  from "kinto";
// import * as kintoClient  from "kinto-http";

@NgModule({
  declarations: [
    // kintoClient,
    AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
    providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
