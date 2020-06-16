import { Component, OnInit } from '@angular/core';7
import { Router, RouterLink } from '@angular/router';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-chooseflight',
  templateUrl: './chooseflight.component.html',
  styleUrls: ['./chooseflight.component.scss']
})
export class ChooseflightComponent implements OnInit {
  constructor(private router: Router) {
    this.showStorage = localStorage.getItem("flightdetails") || {};
  }

  ngOnInit() {
    this.resetTimer();
  }
  public time: any;
  public numberOfPassengers: number = 1;
  public departureDate: any;
  public returnDate: any;
  public departureAirport: string;
  public destinationAirport: string;
  public showStorage: any;
  public today = new Date();
  public todayShort = new Date().toISOString().slice(0,10);

  public cities = ["Warsaw", "Paris", "New York"];
  public opts = [
    { key: "Warsaw", value: ["paris,new york"] },
    { key: "Paris", value: ["warsaw,new york"] },
    { key: "New York", value: ["warsaw, paris,"] }
  ];

  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  @HostListener('document:click')
  @HostListener('document:wheel')
  resetTimer() {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
    localStorage.removeItem("flightdetails");
    console.log("Local storage will now be deleted");
    this.router.navigate(["/chooseflight"]);
    }, 15000);
  }

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
  }

  testLocal() {
    this.saving();
    console.log(this.showStorage);
  }

  delete() {
    localStorage.removeItem("flightdetails");
  }
}
