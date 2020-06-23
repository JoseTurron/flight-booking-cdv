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

   public inputField;

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

  getConnection() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/PL/PLN/en-US/WAW-sky/CDG-sky/2020-09-01?inboundpartialdate=2020-09-09", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "4ffdf62c6bmshfb49ff445025abep1e2116jsn7d7aae645a00"
	}
})
.then((resp) => resp.json())
    .then((data) => {
    console.log(data)
    })
.catch(err => {
  console.log(err);
});

  }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
