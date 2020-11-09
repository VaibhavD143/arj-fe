import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../global-constants';
import Global = WebAssembly.Global;
import {Position} from '../models/Position';

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
}
