import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GlobalConstants } from '../utils/global-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getLogin(username:String, password:String):Observable<any>{

    return this.http.post(GlobalConstants.loginUrl,{"username":username,"password":password},{withCredentials:true});
  }

  logout(){
    // this.http.post("/logout",{},{withCredentials:true}).subscribe(data=>console.log(data),
    // this.http.get("/logout",{withCredentials:true}).subscribe(data=>console.log(data),
    // );
  }

}
