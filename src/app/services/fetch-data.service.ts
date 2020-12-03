import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../utils/global-constants';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private httpClient: HttpClient) { }

  getProjectsByEmployee(employeeId:number){
    return this.httpClient.get(GlobalConstants.findAssignedProjectsUrl+"?employeeId="+employeeId,{withCredentials:true});
  }

  getServices(){
    return this.httpClient.get(GlobalConstants.findAllServices,{withCredentials:true});
  }

  getMakes(){
    return this.httpClient.get(GlobalConstants.findAllMakes,{withCredentials:true});
  }

  getOrigins(){
    return this.httpClient.get(GlobalConstants.findAllOrigins,{withCredentials:true});
  }

  getPurchaseOrders(materialRequestId){
    return this.httpClient.get(GlobalConstants.getPurchaseOrders+"?materialRequestId="+materialRequestId,{withCredentials:true}).toPromise();
  }

}
