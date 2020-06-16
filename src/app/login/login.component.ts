import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public aaa = 'a'
  public comUser = ''
  constructor(private router: Router) { }

  ngOnInit() {
  }

  log(email,password){
    console.log(email.value.toLowerCase())
    console.log(password.value)

    for (let i=0;i<users.length;i++){
      if (users[i].email == email.value.toLowerCase() && users[i].password == password.value){
        console.log("istnieje uzytkownik");
        this.comUser = "znaleziono uzytkownika, za chwilkę nastąpi przekierowanie"
        this.router.navigate(['/flightdetails']);
        break;

      }
      else{
        this.comUser = 'błędne dane lub uzytkownik nie istnieje'
      }
    }


    // if (this.aaa == 'a')
    // {this.router.navigate(['/details']);}
    // else {
    //   this.noUser = "Błędny e-mail lub hasło"
    // }
  }
}
