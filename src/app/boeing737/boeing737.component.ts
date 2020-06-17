import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-boeing737',
  templateUrl: './boeing737.component.html',
  styleUrls: ['./boeing737.component.scss'],
  providers: [TimeoutService]
})
export class Boeing737Component implements OnInit {

  constructor(private timeoutService: TimeoutService) { }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
