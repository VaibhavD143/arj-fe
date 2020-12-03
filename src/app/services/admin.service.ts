import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../utils/global-constants';
import Global = WebAssembly.Global;
import {Position} from '../models/Position';
import { Make } from '../models/Make';
import { Origin } from '../models/Origin';
import { UOM } from '../models/UOM';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient : HttpClient) { }

  dataSource:Position[]=[];

  public getPositions(){
    // this.dataSource.push(new Position('name1','code1',1,true,true,false));
    // this.dataSource.push(new Position('big name2','code2',2,true,true,false));
    // this.dataSource.push(new Position('very big name3','code3',3,true,true,false));
    // this.dataSource.push(new Position('very very big name4','code4',4,true,false,false));
    // this.dataSource.push(new Position('very very very big name5','code5',5,true,false,false));
    // this.dataSource.push(new Position('very very very very big name6','code6',6,true,false,true));
    // return this.dataSource;
    return this.httpClient.get(GlobalConstants.findAllPositionsUrl, {withCredentials:true});
  }
  
  public savePosition(position: Position){
    return this.httpClient.post(GlobalConstants.addPositionUrl, {save: position}, {withCredentials:true});
  }
    
  public updatePosition(position: Position){
    return this.httpClient.post(GlobalConstants.updatePositionUrl, {update: position}, {withCredentials:true});
  }

  public deletePosition(id: number){
    return this.httpClient.post(GlobalConstants.deletePositionUrl,{deleteId: id}, {withCredentials:true});
  }

  public getMakes(){
    return this.httpClient.get(GlobalConstants.findAllMakesUrl, {withCredentials:true});
  }
  
  public saveMake(make:Make){
    return this.httpClient.post(GlobalConstants.addMakeUrl,{save:make},{withCredentials:true});
  }

  public updateMake(make: Make){
    return this.httpClient.post(GlobalConstants.updateMakeUrl, {update: make}, {withCredentials:true});
  }

  public deleteMake(id: number){
    return this.httpClient.post(GlobalConstants.deleteMakeUrl,{deleteId: id}, {withCredentials:true});
  }


  public getOrigins(){
    return this.httpClient.get(GlobalConstants.findAllOriginsUrl, {withCredentials:true});
  }
  
  public saveOrigin(origin:Origin){
    return this.httpClient.post(GlobalConstants.addOriginUrl,{save:origin},{withCredentials:true});
  }

  public updateOrigin(origin: Origin){
    return this.httpClient.post(GlobalConstants.updateOriginUrl, {update: origin}, {withCredentials:true});
  }

  public deleteOrigin(id: number){
    return this.httpClient.post(GlobalConstants.deleteOriginUrl,{deleteId: id}, {withCredentials:true});
  }

  public getUoms(){
    return this.httpClient.get(GlobalConstants.findAllUomsUrl, {withCredentials:true});
  }
  
  public saveUom(uom:UOM){
    return this.httpClient.post(GlobalConstants.addUomUrl,{save:uom},{withCredentials:true});
  }

  public updateUom(uom: UOM){
    return this.httpClient.post(GlobalConstants.updateUomUrl, {update: uom}, {withCredentials:true});
  }

  public deleteUom(id: number){
    return this.httpClient.post(GlobalConstants.deleteUomUrl,{deleteId: id}, {withCredentials:true});
  }

  public getServices(){
    return this.httpClient.get(GlobalConstants.findAllServicesUrl, {withCredentials:true});
  }
  
  public saveService(service: Service){
    return this.httpClient.post(GlobalConstants.addServiceUrl,{save:service},{withCredentials:true});
  }

  public updateService(service: Service){
    return this.httpClient.post(GlobalConstants.updateServiceUrl, {update: service}, {withCredentials:true});
  }

  public deleteService(id: number){
    return this.httpClient.post(GlobalConstants.deleteServiceUrl,{deleteId: id}, {withCredentials:true});
  }
}
