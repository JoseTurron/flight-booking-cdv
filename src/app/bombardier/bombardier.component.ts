import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bombardier',
  templateUrl: './bombardier.component.html',
  styleUrls: ['./bombardier.component.scss']
})
export class BombardierComponent implements OnInit {

  public toggleStyle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleColor() {
    if (this.toggleStyle) {
      return "red";
    } else {
      return "#CCCCCC";
    }
  }
}
