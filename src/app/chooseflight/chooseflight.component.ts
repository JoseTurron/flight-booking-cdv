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
  public chosenPlane: string;
  public today = new Date();
  public todayShort = new Date().toISOString().slice(0,10);

  public cities = ["Warsaw", "Paris", "New York"];
  public opts = [
    { key: "Warsaw", value: ["paris,new york"]},
    { key: "Paris", value: ["warsaw,new york"]},
    { key: "New York", value: ["warsaw, paris,"]}
  ];

  saving() {
    let dataStorage = {
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      departureAirport: this.departureAirport,
      arrivalAirport: this.destinationAirport,
      passengersNumber: this.numberOfPassengers,
      chosenPlane: this.chosenPlane
    };
    localStorage.setItem("flightdetails", JSON.stringify(dataStorage));
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails"));
  }
}
