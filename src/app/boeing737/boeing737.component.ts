import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

const MAX_SEATS = 9;

@Component({
  selector: 'app-boeing737',
  templateUrl: './boeing737.component.html',
  styleUrls: ['./boeing737.component.scss'],
  providers: [TimeoutService]
})
export class Boeing737Component implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = localStorage.getItem("flightdetails") || {};
   }

   public showStorage: any;

  ngOnInit() {
    this.timeoutService.resetTimer();
  }
  counter = 0;
  public chosenSeat: any;
  public seatsList = [];

  onClick($event) {

      const seat = $event.target.closest('.freeSeat');

      const reservedSeat = seat.getAttribute("class").indexOf('occupied');

      this.chosenSeat = seat.getAttribute("id");

      if (reservedSeat > -1) {
          seat.removeAttribute("style");
          seat.setAttribute("class", "free freeSeat");
          const toRemove = this.seatsList.indexOf(this.chosenSeat);
          this.seatsList.splice(toRemove,1);
          this.counter -= 1;
      } else if (this.counter < MAX_SEATS) {
          seat.removeAttribute("style");
          seat.setAttribute("class", "occupied freeSeat");
          this.seatsList.push(this.chosenSeat)
          this.counter += 1;
      } else if (this.counter == MAX_SEATS) {
        alert("You have reached maximum selection of seats.")
      }
      console.log(this.chosenSeat);
      console.log(this.seatsList);
  }
}
