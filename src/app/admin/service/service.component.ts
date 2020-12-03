import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from 'src/app/models/Service';
import { AdminService } from 'src/app/services/admin.service';
import { ErrorService } from 'src/app/utils/error.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  columnsToDisplay = ['id', 'code','name', 'update', 'delete'];
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
    this.adminService.getServices().subscribe(
      data=>{
        console.log(data);
        this.data=data;
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    )
  }

  public saveService(data){
    let service = data['element'];
    let dataSource = data['dataSource'];
    console.log(service);
    
    this.adminService.saveService(service).subscribe(
      data=>{
        console.log(data);
        dataSource.data.push(<Service>data);
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Saved Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    )
  }
    
  public updateService(data) {
    let service = data['element']
    let dataSource = data['dataSource']
    console.log(service);
    
    this.adminService.updateService(service).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<dataSource.data.length;++i){
          if(dataSource.data[i].id==service.id)
          dataSource.data[i]=<Service>data;
        }
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Updated Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    );
  }

  public deleteService(data){
    let service = data['element']
    let dataSource = data['dataSource']
    console.log(service);
    this.adminService.deleteService(service.id).subscribe(data=>{
      let i=0;
      for(;i<dataSource.data.length;++i){
        if(dataSource.data[i].id==service.id){
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