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
    alert("Due to inactivity, you'll be redirected to main page in 10 seconds");
    }, 170000);
    this.time = setTimeout(() => {
    localStorage.removeItem("flightdetails");
    console.log("Timeout - deleting local storage and returning to landing page.");
    this.router.navigate(["/chooseflight"]);
    }, 180000);
  }
}
