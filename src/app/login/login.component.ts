import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './users';
import { TimeoutService } from '../timeout.service';
import { ConnectionService} from '../connection.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [TimeoutService]
})
export class LoginComponent implements OnInit {
  public comUser = ''
  constructor(private router: Router,private timeoutService: TimeoutService, private connectionService: ConnectionService) {
    this.showStorage = JSON.parse(localStorage.getItem("flightdetails")) || {};
   }

  public showStorage: any;

  ngOnInit() {
    this.connectionService.getConnectionDetails().subscribe((result) => {
      console.log("result",result);
    })
    this.timeoutService.resetTimer();
  }

  log(email,password){
    console.log(email.value.toLowerCase())
    console.log(password.value)

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
        this.comUser = 'błędne dane lub uzytkownik nie istnieje'
      }
    }
  }
}
