import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './users';
import { TimeoutService } from '../timeout.service';
import { ConnectionService} from '../connection.service';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TimeoutService]
})
export class LoginComponent implements OnInit {
  public comUser = ''
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router,private timeoutService: TimeoutService, private connectionService: ConnectionService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
   }

  public showStorage: any;
  public visibleCounter;
  public counter: number = 4;
  public basePrice;
  public alert: string = "SIGN IN";
  public alertSign: string = "";
  public existingData = localStorage.getItem("flightdetails")

  ngOnInit() {

    this.timeoutService.resetTimer();

    this.basePrice = fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-US/${this.showStorage.departureAPI}/${this.showStorage.arrivalAPI}/${this.showStorage.departureDate}?inboundpartialdate=${this.showStorage.returnDate}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "4ffdf62c6bmshfb49ff445025abep1e2116jsn7d7aae645a00"
          }
        }
      )
        .then(response => response.json())
        .then(data => data.Quotes[0].MinPrice)
        .catch(err => {
          console.log(err);
        });
  }

  countTo0() {
  const frequency = setInterval(() => {
    this.visibleCounter = this.counter;
    let oneDown = this.counter--
    if (this.counter <= 0 ) {
      clearInterval(frequency);
      this.document.location.reload()
    }
  }, 1000);
  }

  log(email,password){
    if (this.basePrice.__zone_symbol__value > 0) {
    this.existingData = this.existingData ? JSON.parse(this.existingData) : {};
    this.existingData["basePrice"] = this.basePrice;
    localStorage.setItem("flightdetails", JSON.stringify(this.existingData))
    } else {
      this.basePrice.__zone_symbol__value = this.showStorage.defaultPrice;
      this.existingData = this.existingData ? JSON.parse(this.existingData) : {};
      this.existingData["basePrice"] = this.basePrice;
      localStorage.setItem("flightdetails", JSON.stringify(this.existingData))
    }


    for (let i=0;i<users.length;i++){
      if (users[i].email == email.value.toLowerCase() && users[i].password == password.value){
        console.log("User Found");
        this.comUser = "User found - redirecting in progress..."

        if ((this.showStorage.departureAirport == "Warsaw" && this.showStorage.arrivalAirport == "Paris") || (this.showStorage.departureAirport == "Paris" && this.showStorage.arrivalAirport == "Warsaw")) {
          this.router.navigate(['/bombardier']);
        }
        else if ((this.showStorage.departureAirport == "Warsaw" && this.showStorage.arrivalAirport == "New York") || (this.showStorage.departureAirport == "New York" && this.showStorage.arrivalAirport == "Warsaw")) {
          this.router.navigate(['/boeing787']);
        }

        else if ((this.showStorage.departureAirport == "Paris" && this.showStorage.arrivalAirport == "New York") || (this.showStorage.departureAirport == "New York" && this.showStorage.arrivalAirport == "Paris")) {
          this.router.navigate(['/boeing737']);

        } else {
          this.router.navigate(['/flightdetails']);
        }
        break;

      }
      else{
        this.comUser = "Reloading in";
        this.alert = "WRONG LOGIN OR PASSWORD"
      }
    }
  }
}
