import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Origin } from 'src/app/models/Origin';
import { AdminService } from 'src/app/services/admin.service';
import { ErrorService } from 'src/app/utils/error.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {

  columnsToDisplay = ['id', 'value', 'update', 'delete'];
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
    this.adminService.getOrigins().subscribe(
      data=>{
        console.log(data);
        this.data=data;
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    )
  }

  public saveOrigin(data){
    let origin = data['element'];
    let dataSource = data['dataSource'];
    console.log(origin);
    
    this.adminService.saveOrigin(origin).subscribe(
      data=>{
        console.log(data);
        dataSource.data.push(<Origin>data);
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Saved Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    )
  }
    
  public updateOrigin(data) {
    let origin = data['element']
    let dataSource = data['dataSource']
    console.log(origin);
    
    this.adminService.updateOrigin(origin).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<dataSource.data.length;++i){
          if(dataSource.data[i].id==origin.id)
          dataSource.data[i]=<Origin>data;
        }
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Updated Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    );
  }

  public deleteOrigin(data){
    let origin = data['element']
    let dataSource = data['dataSource']
    console.log(origin);
    
    this.adminService.deleteOrigin(origin.id).subscribe(data=>{
      let i=0;
      for(;i<dataSource.data.length;++i){
        if(dataSource.data[i].id==origin.id){
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
