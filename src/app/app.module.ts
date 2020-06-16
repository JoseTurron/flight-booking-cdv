import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { LoginComponent } from './login/login.component';
import { ChooseflightComponent } from './chooseflight/chooseflight.component';
import { SummaryComponent } from './summary/summary.component';
import { BombardierComponent } from './bombardier/bombardier.component';
import { Boeing737Component } from './boeing737/boeing737.component';
import { Boeing787Component } from './boeing787/boeing787.component';

const routes: Routes = [
  {path:'', redirectTo:"/chooseflight", pathMatch:"full"},
  {path: 'chooseflight', component: ChooseflightComponent },
  {path: 'login', component: LoginComponent },
  {path: 'flightdetails', component: FlightdetailsComponent },
  {path: 'summary', component: SummaryComponent },
  {path: 'bombardier', component: BombardierComponent },
  {path: 'boeing737', component: Boeing737Component },
  {path: 'boeing787', component: Boeing787Component },
]

@NgModule({
  declarations: [
    AppComponent,
    FlightdetailsComponent,
    LoginComponent,
    ChooseflightComponent,
    SummaryComponent,
    BombardierComponent,
    Boeing737Component,
    Boeing787Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
