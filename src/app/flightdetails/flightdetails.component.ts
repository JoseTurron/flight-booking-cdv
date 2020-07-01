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
   public childrenData: any[];
   public luggageNumber: number;
   public childrenNumber: number;
   public luggageCounter: number = 0;
   public childrenCounter: number = 0;

  ngOnInit() {
    this.timeoutService.resetTimer();
  }
  //     assignCheckbox() {
  //   const numOfPassengers = this.showStorage.passengersNumber
  //   if (!isNaN(numOfPassengers) && numOfPassengers >= 0) {
  //     const passengersToAdd = numOfPassengers - this.passengers.length;
  //     if (passengersToAdd > 0) {
  //       this.passengers = [...this.passengers, ...Array.from({ length: passengersToAdd }, _ => ({ name: '', child: false, luggage: false }))];
  //     } else if (passengersToAdd < 0) {
  //       this.passengers = this.passengers.filter((_, index) => index < numOfPassengers);
  //     }
  //   }
  // }
  // }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  saveData() {
    localStorage.setItem("passengers", JSON.stringify(this.passengersData));
  }

//     addLuggage() {
//     console.log("dodany bagaz");
//     this.luggageCounter++
//   }

//   addChild() {
//     console.log("works!")
//   }

// }
}
