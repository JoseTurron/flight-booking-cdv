import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-bombardier',
  templateUrl: './bombardier.component.html',
  styleUrls: ['./bombardier.component.scss'],
    providers: [TimeoutService]
})
export class BombardierComponent implements OnInit {

  public toggleStyle: boolean = false;
  public seatchoice1: any;

  constructor(private timeoutService: TimeoutService) { }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

  toggleColor() {
    if (this.toggleStyle) {
      return "#9ec400";
    } else {
      return "#CCCCCC";
    }
  }
 }
