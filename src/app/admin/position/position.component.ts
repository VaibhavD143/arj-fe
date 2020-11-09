import { Component, OnInit } from '@angular/core';
import {Position} from '../../models/Position';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {AdminService} from '../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  displayedColumns = ['name', 'code', 'hierarchy', 'canCreate', 'canEnd', 'update', 'delete'];
  dataSource=new MatTableDataSource<Position>();
  updatedPosition:Position;


  constructor(public dialog: MatDialog, public adminService:AdminService) {}

  ngOnInit(): void {
    this.getPositions();
  }

  public getPositions(){
    this.adminService.getPositions().subscribe(
      data=>{
        console.log(data);
        this.dataSource.data=<Position[]> data;
      }
    )
  }

  public openSavePositionPopup(){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {element: 'position'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined)
        this.save(result);
    });
  }

  public save(position){
    this.adminService.savePosition(position).subscribe(
      data=>{
        console.log(data);
        this.dataSource.data.push(<Position>data);
        this.dataSource._updateChangeSubscription();
      },
      error => {
        console.log('error in saving');
      },
    )
  }

  public openUpdatePositionPopup(position:Position){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {
        element: 'position',
        position: position,
        update: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined)
        this.update(result);
    });
  }

  public update(position) {
    this.adminService.updatePosition(position).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<this.dataSource.data.length;++i){
          if(this.dataSource.data[i].id==position.id)
            this.dataSource.data[i]=position;
        }
        this.dataSource._updateChangeSubscription();
      },
      error => {
        console.log('error in updating');
      },
    );
    return undefined;
  }

  public openConfirmDeletePopup(position:Position){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {
        element: 'delete',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=undefined){
        this.delete(position);
      }
    });
  }

  public delete(position:Position){
    console.log('delete'+JSON.stringify(position));
    this.adminService.deletePosition(position.id).subscribe();
    let i=0;
    for(;i<this.dataSource.data.length;++i){
      if(this.dataSource.data[i].id==position.id){
        break;
      }
    }
    this.dataSource.data.splice(i,1);
    this.dataSource._updateChangeSubscription();
    console.log(this.dataSource);
  }
}
