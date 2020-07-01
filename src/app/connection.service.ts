import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class ConnectionService {

url = "https://api.jsonbin.io/b/5ef88f670bab551d2b681754"

constructor(private http:HttpClient) { }

getConnectionDetails(){
  return this.http.get(this.url)
}

}
