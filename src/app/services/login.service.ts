import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getLogin(username:String, password:String):Observable<any>{
    
    return this.http.post("http://localhost:8010/login",{"username":username,"password":password},{withCredentials:true});
  }

}
