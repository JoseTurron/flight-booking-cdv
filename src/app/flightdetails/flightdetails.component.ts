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
    this.chosenSeats = JSON.parse(localStorage.getItem("chosenSeats")) || {};
   }

   public showStorage: any;
   public chosenSeats: any;
   public luggageCounter: number = 0;
   public passengers = Array.from({ length: (JSON.parse(localStorage['flightdetails']||'{}')).passengersNumber || 2 }, _ => ({ name: '', child: false, luggage: false }));

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

  luggageAdd() {
    this.luggageCounter++
    console.log(this.luggageCounter)
  }

  luggageRemove() {
    this.luggageCounter--
    console.log(this.luggageCounter)
  }

  saveData() {
    localStorage.setItem("passengers", JSON.stringify(this.passengers));
  }
}
