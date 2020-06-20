import { Component, OnInit } from '@angular/core';7
import { Router, RouterLink } from '@angular/router';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-chooseflight',
  templateUrl: './chooseflight.component.html',
  styleUrls: ['./chooseflight.component.scss'],
  providers: [TimeoutService]
})
export class ChooseflightComponent implements OnInit {
  constructor(private router: Router, private timeoutService: TimeoutService) {
    this.showStorage = localStorage.getItem("flightdetails") || {};
  }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }
  public time: any;
  public numberOfPassengers: number = 1;
  public departureDate: any;
  public returnDate: any;
  public departureAirport: string;
  public destinationAirport: string;
  public showStorage: any;
  public planeValue1: any;
  public planeValue2: any;
  public today = new Date();
  public todayShort = new Date().toISOString().slice(0,10);

  public cities = ["Warsaw", "Paris", "New York"];
  public opts = [
    { key: "Warsaw", value: ["paris,new york"], plane: 1 },
    { key: "Paris", value: ["warsaw,new york"], plane: 2 },
    { key: "New York", value: ["warsaw, paris,"], plane: 3 }
  ];

  saving() {
    let dataStorage = {
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      departureAirport: this.departureAirport,
      arrivalAirport: this.destinationAirport,
      passengersNumber: this.numberOfPassengers
    };
    localStorage.setItem("flightdetails", JSON.stringify(dataStorage));
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails"));
    console.log(this.planeValue1 + " " + this.planeValue2)
  }
}
