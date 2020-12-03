import { Component, OnInit } from '@angular/core';
import { MaterialRequestService } from '../services/material-request.service';
import { StorageService } from '../services/storage.service';
import { ErrorService } from '../utils/error.service';
import { NotificationService } from '../utils/notification.service';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})
export class ClosedComponent implements OnInit {

  columnsToDisplay = [
    "index",
    "id",
    "doCreation",
    "status",
    "areaFloor-instruction",
    "project.name-service.name",
    "raisedBy.name-raisedBy.position.name",
    "transactions",
    "requestItems",
    "pos",
    "reopen"
  ]

  columnsToFilter = [
    "id",
    "doCreation",
    "status",
    "areaFloor",
    "project.name",
    "service.name",
    "raisedBy.name",
    "raisedBy.position.name",
  ]

  data;


  constructor(
    private materialRequestService : MaterialRequestService,
    private notifier : NotificationService,
    private errorSerivice : ErrorService,
    private storageService : StorageService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(){
    await this.materialRequestService.findAllProcessedMaterialRequest(Number(this.storageService.get("employeeId")))
    .then(data=>{
      this.data = data;
      console.log(this.data);
    })
    .catch(error=>{
      this.notifier.showError(this.errorSerivice.getServerMessage(error));
    });
    // this.data = temp;
    // console.log("after loading");
  }

  
  async reopenMaterialRequest(data){
    let materialRequestId = data["materialRequestId"];
    let dataSource = data['dataSource'];
    let table = data['table'];
    let employeeId = Number(this.storageService.get("employeeId"));
    console.log(materialRequestId,employeeId);
    
    await this.materialRequestService.reopenMaterialRequest(materialRequestId,employeeId).then(data=>{
      this.notifier.showSuccess("Opened Success!");
      dataSource.data = dataSource.data.filter((value,key)=>{
        return value.id != materialRequestId;
      });
      table.renderRows();

    }).catch(error=>{
      this.notifier.showError(this.errorSerivice.getServerMessage(error));
      this
    });
    

  }

}
