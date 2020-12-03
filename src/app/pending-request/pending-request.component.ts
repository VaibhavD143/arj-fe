import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialRequestService } from '../services/material-request.service';
import { StorageService } from '../services/storage.service';
import { ErrorService } from '../utils/error.service';
import { NotificationService } from '../utils/notification.service';

const temp = [{"id":1,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[],"purchaseOrders":[],"itemMRMappings":[{"id":1,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":1,"value":"meter","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":2},{"id":2,"item":{"id":2,"uom":{"id":1,"unit":"grams","valid":true},"name":"chocolava","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":3}],"doCreation":"2020-10-22","doCancellation":null,"doRequiredDelivery":"2021-10-22","doCompletion":null,"status":"OPEN","remark":null,"areaFloor":"floor1","instruction":"NONE","currentLevelOfHierarchy":5},{"id":3,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[{"id":1,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true}],"purchaseOrders":[],"itemMRMappings":[{"id":3,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":1}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-09","doCompletion":null,"status":"PENDING","remark":null,"areaFloor":"dsa","instruction":"fsfa","currentLevelOfHierarchy":2},{"id":4,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":2,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project2","code":"p2","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},

"transactions":[{"id":2,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T10:42:28.000+00:00","action":"APPROVE","valid":true}],

"purchaseOrders":[],"itemMRMappings":[{"id":4,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":1,"value":"meter","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":0},{"id":5,"item":{"id":2,"uom":{"id":1,"unit":"grams","valid":true},"name":"chocolava","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":0}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-12","doCompletion":null,"status":"PENDING","remark":null,"areaFloor":"dsfad","instruction":"fdsafs","currentLevelOfHierarchy":2},{"id":5,"service":{"id":2,"name":"drink","code":"drink","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[{"id":3,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"purchaseOrders":[],"itemMRMappings":[{"id":6,"item":{"id":3,"uom":{"id":2,"unit":"litres","valid":true},"name":"wine","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":3},{"id":7,"item":{"id":4,"uom":{"id":2,"unit":"litres","valid":true},"name":"mojito","valid":true},"make":{"id":3,"value":"gram","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":6},{"id":8,"item":{"id":3,"uom":{"id":2,"unit":"litres","valid":true},"name":"wine","valid":true},"make":{"id":4,"value":"5","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":12}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-11","doCompletion":null,"status":"PENDING","remark":"big lie","areaFloor":"lie","instruction":"biggest lie","currentLevelOfHierarchy":2},{"id":1,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[],"purchaseOrders":[],"itemMRMappings":[{"id":1,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":1,"value":"meter","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":2},{"id":2,"item":{"id":2,"uom":{"id":1,"unit":"grams","valid":true},"name":"chocolava","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":3}],"doCreation":"2020-10-22","doCancellation":null,"doRequiredDelivery":"2021-10-22","doCompletion":null,"status":"OPEN","remark":null,"areaFloor":"floor1","instruction":"NONE","currentLevelOfHierarchy":5},{"id":3,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[{"id":1,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true}],"purchaseOrders":[],"itemMRMappings":[{"id":3,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":1}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-09","doCompletion":null,"status":"PENDING","remark":null,"areaFloor":"dsa","instruction":"fsda","currentLevelOfHierarchy":2},{"id":4,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":2,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project2","code":"p2","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[{"id":2,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true}],"purchaseOrders":[],"itemMRMappings":[{"id":4,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":1,"value":"meter","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":0},{"id":5,"item":{"id":2,"uom":{"id":1,"unit":"grams","valid":true},"name":"chocolava","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":0}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-12","doCompletion":null,"status":"PENDING","remark":null,"areaFloor":"dsfad","instruction":"fdsafs","currentLevelOfHierarchy":2},{"id":5,"service":{"id":2,"name":"drink","code":"drink","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[{"id":3,"levelOfHierarchy":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"purchaseOrders":[],"itemMRMappings":[{"id":6,"item":{"id":3,"uom":{"id":2,"unit":"litres","valid":true},"name":"wine","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":3},{"id":7,"item":{"id":4,"uom":{"id":2,"unit":"litres","valid":true},"name":"mojito","valid":true},"make":{"id":3,"value":"gram","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":6},{"id":8,"item":{"id":3,"uom":{"id":2,"unit":"litres","valid":true},"name":"wine","valid":true},"make":{"id":4,"value":"5","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":12}],"doCreation":"2020-11-09","doCancellation":null,"doRequiredDelivery":"2020-11-11","doCompletion":null,"status":"PENDING","remark":"big lie","areaFloor":"lie","instruction":"biggest lie","currentLevelOfHierarchy":2}];

const temp2 = [{"id":1,"service":{"id":1,"name":"food","code":"food","valid":true},"project":{"id":1,"pes":[{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"transactions":[{"id":1,"timestamp":"2020-11-09T09:54:24.000+00:00","action":"CREATE","valid":true},{"id":2,"timestamp":"2020-11-09T10:42:31.000+00:00","action":"CREATE","valid":true},{"id":3,"timestamp":"2020-11-09T10:47:19.000+00:00","action":"CREATE","valid":true}],"pmProjects":[],"name":"gauri","valid":true},{"id":3,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":3,"username":"drogo","password":"drogo","token":null},"transactions":[],"pmProjects":[],"name":"smit","valid":true}],"name":"project1","code":"p1","valid":true},"raisedBy":{"id":1,"position":{"id":1,"name":"a","code":"a","hierarchy":1,"canCreate":true,"canEnd":false,"valid":true},"account":{"id":1,"username":"a","password":"a","token":"token:a"},"name":"gauri","valid":true},"transactions":[],"purchaseOrders":[],"itemMRMappings":[{"id":1,"item":{"id":1,"uom":{"id":1,"unit":"grams","valid":true},"name":"donut","valid":true},"make":{"id":1,"value":"meter","valid":true},"origin":{"id":1,"value":"origin1","valid":true},"quantity":2},{"id":2,"item":{"id":2,"uom":{"id":1,"unit":"grams","valid":true},"name":"chocolava","valid":true},"make":{"id":2,"value":"kilogram","valid":true},"origin":{"id":2,"value":"origin2","valid":true},"quantity":3}],"doCreation":"2020-10-22","doCancellation":null,"doRequiredDelivery":"2021-10-22","doCompletion":null,"status":"OPEN","remark":null,"areaFloor":"floor1","instruction":"NONE","currentLevelOfHierarchy":5}]

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class PendingRequestComponent implements OnInit {

  columnsToDisplay = [
    "index",
    "id",
    "doCreation",
    "areaFloor-instruction",
    "project.name-service.name",
    "raisedBy.name-raisedBy.position.name",
    "transactions",
    "requestItems",
    "action",
    
  ]

  columnsToFilter = [
    "id",
    "doCreation",
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
    await this.materialRequestService.findAllPendingMaterialRequests(Number(this.storageService.get("employeeId")))
    .then(data=>{
      this.data = data;
      console.log(this.data);
      
    })
    .catch(error=>{
      this.notifier.showError(this.errorSerivice.getServerMessage(error));
    });
    // this.data = temp;

  }

  async onApprove(data){
    let materialRequestId = data["materialRequestId"];
    let dataSource = data['dataSource'];
    let table = data['table'];
    let employeeId = Number(this.storageService.get("employeeId"));
    console.log(materialRequestId,employeeId);
    // this.notifier.showSuccess("Approved Success!");
    // dataSource.data = dataSource.data.filter((value,key)=>{
    //   return value.id != materialRequestId;
    // });
    // table.renderRows();
    await this.materialRequestService.approveMaterialRequest(materialRequestId,employeeId).then(data=>{
      this.notifier.showSuccess("Approved Success!");
      dataSource.data = dataSource.data.filter((value,key)=>{
        return value.id != materialRequestId;
      });
      table.renderRows();

    }).catch(error=>{
      this.notifier.showError(this.errorSerivice.getServerMessage(error));
      this
    });
    
  }
  
  async onDecline(data){
    let materialRequestId = data["materialRequestId"];
    let dataSource = data['dataSource'];
    let table = data['table'];
    let employeeId = Number(this.storageService.get("employeeId"));
    console.log(materialRequestId,employeeId);
    // this.notifier.showSuccess("Declined Success!");
    // dataSource.data = dataSource.data.filter((value,key)=>{
    //   return value.id != materialRequestId;
    // });
    // table.renderRows();
    await this.materialRequestService.declineMaterialRequest(materialRequestId,employeeId).then(data=>{
      this.notifier.showSuccess("Declined Success!");
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