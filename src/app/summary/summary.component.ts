import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';
import { luggageBombardier} from '../prices'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [TimeoutService]
})
export class SummaryComponent implements OnInit {

  constructor(private timeoutService: TimeoutService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
    this.basePrice = this.showStorage.basePrice.__zone_symbol__value;
    this.seats = JSON.parse(localStorage.getItem("chosenSeats")) || {};
    this.passengers = JSON.parse(localStorage.getItem("passengers")) || {};
   }

   public showStorage;
   public exchangeEur;
   public exchangeUsd;
   public priceEur;
   public priceUsd;
   public luggagePrice: number;
   public passengers: any[];
   public finalPrice: number;
   public seats: any[];
   public basePrice: number;

   public inputField;

   countEur() {
    console.log(this.passengers[2].child)
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

  ngOnInit() {
    this.timeoutService.resetTimer();
    if (this.showStorage.chosenPlane == "bombardier") {
      this.luggagePrice = luggageBombardier;
    }

    this.finalPrice = (this.basePrice * this.showStorage.passengersNumer) + (this.showStorage.passengersNumer * this.luggagePrice)
  }

}
