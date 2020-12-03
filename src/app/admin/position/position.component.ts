import { Component, OnInit } from '@angular/core';
import {Position} from '../../models/Position';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {AdminService} from '../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/utils/notification.service';
import { ErrorService } from 'src/app/utils/error.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  columnsToDisplay = ['name', 'code', 'hierarchy', 'canCreate', 'canEnd', 'update', 'delete'];
  // dataSource=new MatTableDataSource<Position>();
  // updatedPosition:Position;
  data;

  constructor(
    public dialog: MatDialog,
    public adminService:AdminService,
    private notifier : NotificationService,
    private errorService : ErrorService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.adminService.getPositions().subscribe(
      data=>{
        console.log(data);
        this.data=data;
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    )
  }

  // public getPositions(){
  //   this.adminService.getPositions().subscribe(
  //     data=>{
  //       console.log(data);
  //       this.dataSource.data=<Position[]> data;
  //     },
  //     error=>{
  //       this.notifier.showError(this.errorService.getServerMessage(error));
  //     }
  //   )
  // }

  // public openSavePositionPopup(){
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: "40%",
  //     data: {element: 'position'}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result!=undefined)
  //       this.save(result);
  //   });
  // }

  public savePosition(data){
    let position = data['element'];
    let dataSource = data['dataSource'];

    this.adminService.savePosition(position).subscribe(
      data=>{
        console.log(data);
        dataSource.data.push(<Position>data);
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Saved Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    )
  }
    
  // public openUpdatePositionPopup(position:Position){
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: "40%",
  //     data: {
  //       element: 'position',
  //       position: position,
  //       update: true}
  //     });
      
  //     dialogRef.afterClosed().subscribe(result => {
  //   if(result!=undefined)
  //     this.update(result);
  //   });
  // }

  public updatePosition(data) {
    let position = data['element'];
    let dataSource = data['dataSource'];

    this.adminService.updatePosition(position).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<dataSource.data.length;++i){
          if(dataSource.data[i].id==position.id)
          dataSource.data[i]=position;
        }
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Updated Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    );
    return undefined;
  }

  // public openConfirmDeletePopup(position:Position){
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: "40%",
  //     data: {
  //       element: 'delete',
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     if(result!=undefined){
  //       this.delete(position);
  //     }
  //   });
  // }

  public deletePosition(data){
    let position = data['element'];
    let dataSource = data['dataSource'];

    console.log('delete'+JSON.stringify(position));
    
    this.adminService.deletePosition(position.id).subscribe(data=>{
      let i=0;
      for(;i<dataSource.data.length;++i){
        if(dataSource.data[i].id==position.id){
          break;
        }
      }
      dataSource.data.splice(i,1);
      dataSource._updateChangeSubscription();
      this.notifier.showSuccess("Deleted Successfully");
    },
    error=>{
      this.notifier.showError(this.errorService.getServerMessage(error));
    });
  }
}
