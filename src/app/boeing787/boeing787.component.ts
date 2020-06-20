import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-boeing787',
  templateUrl: './boeing787.component.html',
  styleUrls: ['./boeing787.component.scss'],
  providers: [TimeoutService]
})
export class Boeing787Component implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = localStorage.getItem("flightdetails") || {};
  }

  public showStorage: any;

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
