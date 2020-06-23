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
   public exchangeEur;
   public departureAPI = "WAW-sky";
   public exchangeUsd;
   public priceEur;
   public priceUsd;
   public basePrice: number;

   public inputField;

   countEur() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeEur = data.rates[0].mid
    console.log("Exchange rate: " + exchangeEur)
    this.priceEur = (this.basePrice * exchangeEur).toFixed(0)
    })
      }

        countUsd() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeUsd = data.rates[0].mid
    console.log("Exchange rate: " + exchangeUsd)
    this.priceUsd = (this.basePrice * exchangeUsd).toFixed(0)
    })
      }

  getConnection() {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-US/{{ this.departureAPI }}/CDG-sky/2020-08-12?inboundpartialdate=2020-08-23",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "4ffdf62c6bmshfb49ff445025abep1e2116jsn7d7aae645a00",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.basePrice = data.Quotes[0].MinPrice;
      console.log(this.basePrice * this.showStorage.passengersNumber)
    })
    .catch((err) => {
      console.log(err);
    });

  }

  ngOnInit() {
    this.timeoutService.resetTimer();
  }

}
