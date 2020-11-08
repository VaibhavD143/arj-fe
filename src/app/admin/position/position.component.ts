import { Component, OnInit } from '@angular/core';
import {Position} from '../../models/Position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  displayedColumns = ['name', 'code', 'hierarchy', 'canCreate', 'canEnd', 'delete'];
  dataSource:Position[]=[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource.push(new Position('name1','code1',1,true,true,false));
    this.dataSource.push(new Position('big name2','code2',2,true,true,false));
    this.dataSource.push(new Position('very big name3','code3',3,true,true,false));
    this.dataSource.push(new Position('very very big name4','code4',4,true,false,false));
    this.dataSource.push(new Position('very very very big name5','code5',5,true,false,false));
    this.dataSource.push(new Position('very very very very big name6','code6',6,true,false,true));

  }

  public addPosition(){
    console.log('addPos');
  }
}
