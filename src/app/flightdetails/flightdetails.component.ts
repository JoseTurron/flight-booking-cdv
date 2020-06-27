import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.scss'],
  providers: [TimeoutService]
})
export class FlightdetailsComponent implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
    this.passengersData = [];
   }

   public showStorage: any;
   public passengersData: any[];
   public luggageNumber: number;
   public childrenNumber: number;
   public luggageCounter: number = 0;
   public childrenCounter: number = 0;

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }

    return items;
  }

  // addLuggage() {
  //   console.log("dodany bagaz");
  //   this.luggageCounter++
  // }

  // addChild(event) {
  //   console.log(event);
  // }

  // createRange = number => Array.from({ length: number }, _ => ({ name: '', child: false, luggage: false }))

  checkData() {
    console.log(this.passengersData);
  }

  saveData() {
    localStorage.setItem("people", JSON.stringify(this.passengersData));
  }
}
