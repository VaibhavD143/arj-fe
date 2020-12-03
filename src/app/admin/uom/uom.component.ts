import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UOM } from 'src/app/models/UOM';
import { AdminService } from 'src/app/services/admin.service';
import { ErrorService } from 'src/app/utils/error.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UomComponent implements OnInit {

  columnsToDisplay = ['id', 'unit', 'update', 'delete'];
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
    this.adminService.getUoms().subscribe(
      data=>{
        console.log(data);
        this.data=data;
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    )
  }

  public saveUom(data){
    let uom = data['element'];
    let dataSource = data['dataSource'];
    console.log(uom);
    
    this.adminService.saveUom(uom).subscribe(
      data=>{
        console.log(data);
        dataSource.data.push(<UOM>data);
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Saved Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    )
  }
    
  public updateUom(data) {
    let uom = data['element']
    let dataSource = data['dataSource']
    console.log(uom);
    
    this.adminService.updateUom(uom).subscribe(
      data=>{
        console.log(data);
        let i=0;
        for(;i<dataSource.data.length;++i){
          if(dataSource.data[i].id==uom.id)
          dataSource.data[i]=<UOM>data;
        }
        dataSource._updateChangeSubscription();
        this.notifier.showSuccess("Updated Successfully");
      },
      error => {
        this.notifier.showError(this.errorService.getServerMessage(error));
      },
    );
  }

  public deleteUom(data){
    let uom = data['element']
    let dataSource = data['dataSource']
    console.log(uom);
    this.adminService.deleteUom(uom.id).subscribe(data=>{
      let i=0;
      for(;i<dataSource.data.length;++i){
        if(dataSource.data[i].id==uom.id){
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
