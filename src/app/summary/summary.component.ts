import { Component, OnInit } from '@angular/core';
import { TimeoutService } from '../timeout.service';
import { luggageBombardier, luggageBoeing737, luggageBoeing787, childrenDiscountBombardier, childrenDiscountBoeing737, childrenDiscountBoeing787} from '../prices'
import { ThrowStmt } from '@angular/compiler';

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
   public currency: string = "PLN";

   public passengers: any[];
   public adults: number;
   public seats: any[];

   public basePrice: number;
   public childrenPrice: number;
   public adultsPrice: number;
   public finalPrice;
   public finalPriceOrigin;
   public luggagePrice: number;
   public childrenDiscount: number;

   public luggageCounter: number;
   public inputField;

   countEur() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeEur = data.rates[0].mid
    console.log("Exchange rate: " + exchangeEur)
    this.finalPrice = (this.finalPriceOrigin / exchangeEur)
    this.currency = "EUR"
    })
      }

        countUsd() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
    .then((resp) => resp.json())
    .then((data) => {
    let exchangeUsd = data.rates[0].mid
    console.log("Exchange rate: " + exchangeUsd)
    this.finalPrice = (this.finalPriceOrigin / exchangeUsd)
    this.currency = "USD"
    })
      }

    resetCurrencies() {
        this.finalPrice = this.finalPriceOrigin;
        this.currency = "PLN"
      }

  ngOnInit() {
    this.timeoutService.resetTimer();
    if (this.showStorage.chosenPlane == "bombardier") {
      this.luggagePrice = luggageBombardier;
      this.childrenDiscount = childrenDiscountBombardier;
    } else if (this.showStorage.chosenPlane == "boeing737") {
      this.luggagePrice = luggageBoeing737;
      this.childrenDiscount = childrenDiscountBoeing737;
    } else if (this.showStorage.chosenPlane == "boeing787") {
      this.luggagePrice = luggageBoeing787;
      this.childrenDiscount = childrenDiscountBoeing787;
    }
    this.adults = this.showStorage.passengersNumber - this.showStorage.children;

    this.childrenPrice = ((this.basePrice * this.childrenDiscount) * this.showStorage.children)

    this.adultsPrice = (this.adults * this.basePrice)
    console.log(this.adultsPrice)

    const data = this.passengers
    this.luggageCounter = data.reduce((previousValue, currentValue) => {
      if (currentValue.luggage) {
        previousValue += 1;
      }
      return previousValue;
    }, 0);

    this.finalPrice = ((this.childrenPrice + this.adultsPrice) + (this.luggageCounter * this.luggagePrice))

    this.finalPriceOrigin = ((this.childrenPrice + this.adultsPrice) + (this.luggageCounter * this.luggagePrice))

    console.log("base price: ", this.basePrice, "children price: ", this.childrenPrice, "adults price: ", this.adultsPrice, "luggage price: ", this.luggagePrice, "luggage counter: ", this.luggageCounter)
    console.log("final price: ", this.finalPrice)
  }

}
