import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [TimeoutService]
})
export class SummaryComponent implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
   }

   public showStorage;
   public price:number = 500;
   public exchangeEur;
   public exchangeUsd;
   public priceEur;
   public priceUsd;

   countEur() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeEur = data.rates[0].mid
    console.log("Exchange rate: " + exchangeEur)
    console.log(this.price);
    this.priceEur = (this.price * exchangeEur).toFixed(0)
    })
      }

        countUsd() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeUsd = data.rates[0].mid
    console.log("Exchange rate: " + exchangeUsd)
    console.log(this.price);
    this.priceUsd = (this.price * exchangeUsd).toFixed(0)
    })
      }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
