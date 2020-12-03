import { Injectable } from '@angular/core';
import { MaterialRequestWrapper } from '../models/MaterialRequestWrapper';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GlobalConstants } from '../utils/global-constants';


@Injectable({
  providedIn: 'root'
})
export class MaterialRequestService {

  constructor(private httpClient: HttpClient) { }
  
  createMaterialRequest(materialRequestWrapper:MaterialRequestWrapper):Promise<any>{
    let data = JSON.stringify(materialRequestWrapper);
    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials:true,
    };
    return this.httpClient.post(GlobalConstants.createMaterialRequest,JSON.stringify(materialRequestWrapper),httpOptions).toPromise();
  }

  findAllProcessedMaterialRequest(employeeId : number){
    return this.httpClient.get(GlobalConstants.findAllProcessedMaterialRequest+"?employeeId="+employeeId,{withCredentials:true}).toPromise();
  }
  
  findAllPendingMaterialRequests(employeeId : number){
    return this.httpClient.get(GlobalConstants.findAllPendingMaterialRequests+"?employeeId="+employeeId,{withCredentials:true}).toPromise();
  }
  
  closeMaterialRequest(materialRequestId:number, employeeId:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials:true,
    };
    return this.httpClient.post(GlobalConstants.closeMaterialRequest,{"employeeId":employeeId,"materialRequestId":materialRequestId},httpOptions).toPromise();
  }

  reopenMaterialRequest(materialRequestId:number, employeeId:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials:true,
    };
    return this.httpClient.post(GlobalConstants.reopenMaterialRequest,{"employeeId":employeeId,"materialRequestId":materialRequestId},httpOptions).toPromise();
  }

  approveMaterialRequest(materialRequestId:number, employeeId:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials:true,
    };
    return this.httpClient.post(GlobalConstants.approveMaterialRequest,{"employeeId":employeeId,"materialRequestId":materialRequestId},httpOptions).toPromise();
  }

  declineMaterialRequest(materialRequestId:number, employeeId:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      withCredentials:true,
    };
    return this.httpClient.post(GlobalConstants.declineMaterialRequest,{"employeeId":employeeId,"materialRequestId":materialRequestId},httpOptions).toPromise();
  }

}