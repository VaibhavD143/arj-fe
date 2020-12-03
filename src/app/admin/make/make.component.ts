import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Make } from 'src/app/models/Make';
import { AdminService } from 'src/app/services/admin.service';
import { ErrorService } from 'src/app/utils/error.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

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
    this.adminService.getMakes().subscribe(
      data=>{
        console.log(data);
        this.data=data;
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    )
  }

  public saveMake(data){
    let make = data['element'];
    let dataSource = data['dataSource'];
    console.log(make);
    
    this.adminService.saveMake(make).subscribe(
      data=>{
        console.log(data);
        dataSource.data.push(<Make>data);
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Saved Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    )
  }
    
  public updateMake(data) {
    let make = data['element']
    let dataSource = data['dataSource']
    console.log(make);
    
    this.adminService.updateMake(make).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<dataSource.data.length;++i){
          if(dataSource.data[i].id==make.id)
          dataSource.data[i]=<Make>data;
        }
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Updated Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    );
  }

  public deleteMake(data){
    let make = data['element']
    let dataSource = data['dataSource']
    console.log(make);
    this.adminService.deleteMake(make.id).subscribe(data=>{
      let i=0;
      for(;i<dataSource.data.length;++i){
        if(dataSource.data[i].id==make.id){
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
