import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-bombardier',
  templateUrl: './bombardier.component.html',
  styleUrls: ['./bombardier.component.scss'],
    providers: [TimeoutService]
})
export class BombardierComponent implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
   }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

  counter = 0;
  public chosenSeat: any;
  public seatsList = [];
  public alert = ""
  public showStorage;

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
      } else if (this.counter < this.showStorage.passengersNumber) {
          seat.removeAttribute("style");
          seat.setAttribute("class", "occupied freeSeat");
          this.seatsList.push(this.chosenSeat)
          this.counter += 1;
          this.alert = "You need to choose " + (this.showStorage.passengersNumber - this.counter) + " seats." ;
      } else if (this.counter == this.showStorage.passengersNumber) {
        this.alert = "You can only choose maximum of {{this.showStorage.passengersNumber}} seats"
      }
      console.log(this.chosenSeat);
      console.log(this.seatsList);
  }
}
