import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getLogin(username:String, password:String):Observable<any>{
    
    return this.http.post(GlobalConstants.loginUrl,{"username":username,"password":password},{withCredentials:true});
  }

}
