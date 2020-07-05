import { Router } from "@angular/router";
import { HostListener, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class TimeoutService {
  constructor(private router: Router) {  }

  time;

  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  @HostListener('document:click')
  @HostListener('document:wheel')
  resetTimer() {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
    localStorage.removeItem("flightdetails");
    localStorage.removeItem("passengers");
    localStorage.removeItem("chosenSeats");
    alert("Due to inactivity, your session has expired. Please start again");
    this.router.navigate(["/chooseflight"]);
    }, 180000);
  }
}
