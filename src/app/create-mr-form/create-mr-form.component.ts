import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MaterialRequestWrapper } from '../models/MaterialRequestWrapper';
import { FetchDataService } from '../services/fetch-data.service';
import { MaterialRequestService } from '../services/material-request.service';
import { StorageService } from '../services/storage.service';
import { AppDateAdapter, APP_DATE_FORMATS } from '../utils/dateFormat';
import { ErrorService } from '../utils/error.service';
import { NotificationService } from '../utils/notification.service';

@Component({
  selector: 'app-create-mr-form',
  templateUrl: './create-mr-form.component.html',
  styleUrls: ['./create-mr-form.component.css'],
  providers : [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
})
export class CreateMrFormComponent implements OnInit {

  projects : any;
  services : any;
  makes : any;
  origins : any;
  materialRequestWrapper : MaterialRequestWrapper;
  //selected project object from drop Down
  selectedProject = null;
  //selected service object from drop Down
  selectedService = null;
  //today's date to set min date for doRequiredDelievery
  today: Date = new Date();
  // requestItems : FormArray = new FormArray([]);
  requestItemForm : FormGroup;

  constructor(
    private fetchDataService:FetchDataService,
    private fb : FormBuilder,
    private materialRequestService:MaterialRequestService,
    private notifier : NotificationService,
    private errorService : ErrorService,
    private storageService : StorageService,
    ) { }

  ngOnInit(): void {
    this.loadForm(Number(this.storageService.get("employeeId")));
    this.materialRequestWrapper= new MaterialRequestWrapper(null,null,null,null,null,null,null,null,null,null);
    this.materialRequestWrapper.doRequiredDelivery = this.today;
    this.requestItemForm = this.fb.group({
      requestItems : this.fb.array([
        this.addRequestItemGroup(),
      ])
    })
    
  }

  
  get requestItems(): FormArray {
    return this.requestItemForm.get('requestItems') as FormArray;
  }

  clearRequestItems(){
    (<FormArray>this.requestItemForm.get("requestItems")).clear();
    (<FormArray>this.requestItemForm.get("requestItems")).push(this.addRequestItemGroup());
  }

  addRequestItemGroup(_itemId=null,_makeId=null,_originId=null,_quantity=null):FormGroup{
      return this.fb.group({
        itemId : [_itemId, Validators.required],
        makeId: [_makeId, Validators.required],
        originId: [_originId, Validators.required],
        quantity: [_quantity, Validators.required]
      });
  
  }

  addRequestItem(_itemId=null,_makeId=null,_originId=null,_quantity=null){
    (<FormArray>this.requestItemForm.get("requestItems")).push(this.addRequestItemGroup(_itemId,_makeId,_originId,_quantity));
  }

  deleteRequestItem(i){
    (<FormArray>this.requestItemForm.get("requestItems")).removeAt(i);
    if((<FormArray>this.requestItemForm.get("requestItems")).length ==0){
      // this.snackBar.open("You have cleared all transactions now", "", {duration: 3000,});
      alert("you clered all fucker!");
      this.addRequestItem();
    }
  }

  serviceChanged(){
    this.clearRequestItems();
  }

  loadForm(employeeId:number){
    this.fetchDataService.getProjectsByEmployee(employeeId).subscribe(
      data=>{
        this.projects = data;
        console.log(this.projects);
        // this.notifier.showSuccess("Projects are listed!");
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
      );
      
      
    this.fetchDataService.getServices().subscribe(
      data=>{
        this.services = data;
        console.log(this.services);
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    );
    
    
    this.fetchDataService.getOrigins().subscribe(
      data=>{
        this.origins = data;
        console.log("origns",data);
        
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    );

    this.fetchDataService.getMakes().subscribe(
      data=>{
        this.makes = data;
        console.log("makes",data);
        
      },
      error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      }
    );
  }

  onSubmit(createMrForm):void{
    // createMrForm is reference to template driven form group
    this.materialRequestWrapper.itemMRMappingWrappers = this.requestItemForm.get("requestItems").value;
    this.materialRequestWrapper.projectId = this.selectedProject.id;
    this.materialRequestWrapper.serviceId = this.selectedService.id;
    this.materialRequestWrapper.raisedById = Number(this.storageService.get("employeeId"));
    console.log(this.materialRequestWrapper);
    this.materialRequestService.createMaterialRequest(this.materialRequestWrapper)
    .then(data=>{
      this.notifier.showSuccess("Created Successfully");
      this.requestItemForm.reset();
      createMrForm.form.reset();
      console.log(data);
    })
    .catch(error=>{
      this.notifier.showError(this.errorService.getServerMessage(error));
    });
    
  }
  
  public get data() : string {
    // return JSON.stringify(this.selectedProject)+JSON.stringify(this.selectedService);
    return JSON.stringify(this.materialRequestWrapper)+this.materialRequestWrapper.doRequiredDelivery.toString();
  }

}
