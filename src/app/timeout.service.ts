import { Router } from "@angular/router";
import { HostListener, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class TimeoutService {
  constructor(private router: Router) {  }
;
  time: number;

  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  @HostListener('document:click')
  @HostListener('document:wheel')
  resetTimer() {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
    localStorage.removeItem("flightdetails");
    alert("Stop being so passive. Do something!")
    this.router.navigate(["/chooseflight"]);
    }, 5000);
    this.time = setTimeout(() => {
    localStorage.removeItem("flightdetails");
    console.log("Timeout - deleting local storage and returning to landing page.");
    this.router.navigate(["/chooseflight"]);
    }, 180000);
  }
}
