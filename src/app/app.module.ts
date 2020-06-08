import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { LoginComponent } from './login/login.component';
import { ChooseflightComponent } from './chooseflight/chooseflight.component';
import { SummaryComponent } from './summary/summary.component';
import { BombardierComponent } from './bombardier/bombardier.component';
import { Boeing737Component } from './boeing737/boeing737.component';
import { Boeing787Component } from './boeing787/boeing787.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightdetailsComponent,
    LoginComponent,
    ChooseflightComponent,
    SummaryComponent,
    BombardierComponent,
    Boeing737Component,
    Boeing787Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
