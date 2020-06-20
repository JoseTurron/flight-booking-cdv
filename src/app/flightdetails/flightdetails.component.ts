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
    this.showStorage = localStorage.getItem("flightdetails") || {};
   }

   public showStorage: any;

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
