import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { HandleFileDialogComponent } from '../handle-file-dialog/handle-file-dialog.component';
import { RemoveFileDialogComponent } from '../remove-file-dialog/remove-file-dialog.component';
import { MaterialRequestService } from '../services/material-request.service';
import { StorageService } from '../services/storage.service';
import { ErrorService } from '../utils/error.service';
import { GlobalConstants } from '../utils/global-constants';
import { NotificationService } from '../utils/notification.service';

@Component({
  selector: 'app-material-request-table',
  templateUrl: './material-request-table.component.html',
  styleUrls: ['./material-request-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('* <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MaterialRequestTableComponent implements OnInit {

  /* 
  format of column name of columnDef as they are supllied as sortingHeader:
  column1-column2-column3
  column = prop.prop.prop
  */
  @Input() columnsToDisplay;

  /* mention columns name individually
  as it will be explicitly used in filterPredicateAccessor
  */
  @Input() columnsToFilter;

  @Output() approved = new EventEmitter<any>();
  @Output() declined = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();
  @Output() reopen = new EventEmitter<any>();

  itemTableColumns=[
    "item.name",
    "item.uom.unit",
    "make.value",
    "origin.value",
  ];

  @Input() data;
  
  dataSource;
  expandedMaterialRequest : any|null; //this will be carrying expanded materialRequest
  navConfig; //to store information about which navs to show
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private materialRequestService : MaterialRequestService,
    private notifier : NotificationService,
    private errorSerivice : ErrorService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange){
    this.loadTable();
  }

  async loadTable(){
    // await this.materialRequestService.findAllProcessedMaterialRequest(1)
    // .then(data=>{
    //   this.data = data;
    //   console.log(this.data);
      
    // })
    // .catch(error=>{
    //   this.notifier.showError(this.errorSerivice.getServerMessage(error));
    // });
    // this.data = temp;
    console.log(this.data);
    
    this.dataSource = new MatTableDataSource(this.data);
    

    this.dataSource.sortingDataAccessor = (data: object, sortHeaderId: string) => {
      // sortHeaderId is from matColumnDef attribute.
      
      let res:Array<any> = [];  //to store all the values included in cell
  
      //'-' is to seperate two fields
      sortHeaderId.split('-').forEach(propPath=>{
        //'.' to split nested properties of the field
        const value: any = propPath.split('.').reduce((curObj, property) => curObj[property], data);
        res.push(!isNaN(value) ? Number(value) : value);  //push each value into the array.
      });
  
      // console.log(res);
      return res;
    };
      
    this.dataSource.filterPredicate = (data, filter) => {
      let dataStr = '';
      let keys;
      let keywords = filter.split(',');
      for (const keyword of keywords) {

        for (const column of this.columnsToFilter) {
          keys = column.split('.');
          dataStr += this.nestedFilter(data, keys);
        }
        dataStr = dataStr.trim().toLowerCase();
        if (dataStr.indexOf(keyword) == -1) {
          return false;
        }
      }
      return true
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  nestedFilter(data, keys) {
    for (let key of keys) {
      data = data[key]
    }
    return data || '';
  }
  applyFilter(filterString: string) {
    this.dataSource.filter = filterString.trim().toLowerCase();
  }
  //to sort transactions to show in table
  sortTransactions(transactions:Array<any>){
    transactions.sort(function(a,b){
      let d1 =  new Date(a.timestamp);
      let d2 =  new Date(b.timestamp);
      return d1.valueOf()-d2.valueOf();
    });
    return transactions;
  }

  getDate(date){
    let d = new Date(date);
    return d.getFullYear().toString()+"-"+d.getMonth().toString()+"-"+d.getDate().toString();
  }

  approve(materialRequestId:number){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        message: "You are APROVING MR num : "+materialRequestId+".",
        confirmTitle: "Approve",
        cancelTitle: "Discard",
        title: "Alert!",
        btnBgColor:"#35aa35",
      },
      width: "300px",
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.approved.emit({"materialRequestId":materialRequestId,"dataSource" : this.dataSource, 'table':this.table});
      }
      else{
        this.notifier.showSuccess("Action discarded!");
      }
    });
  }

  uploadFiles(materialRequestId){
    const dialogRef = this.dialog.open(HandleFileDialogComponent,{
      data:{
        materialRequestId : materialRequestId,
      },
      width:"50%",
      height : "50%",
    });
  }

  viewFiles(materialRequestId,isProc=false){
    const dialogRef = this.dialog.open(RemoveFileDialogComponent,{
      data:{
        materialRequestId : materialRequestId,
        isProc : isProc,
      },
      width:"50%",
      height : "50%",
    });
  }

  closeMaterialRequest(materialRequestId){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        message: "You are CLOSING MR num : "+materialRequestId+".",
        confirmTitle: "Close",
        cancelTitle: "Cancel",
        title: "Alert!",
        btnBgColor:"#f44336",
      },
      width: "300px",
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.closed.emit({"materialRequestId":materialRequestId,"dataSource" : this.dataSource, 'table':this.table});
      }
      else{
        this.notifier.showSuccess("Action discarded!");
      }
    });
  }

  reopenMaterialRequest(materialRequestId){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        message: "You are OPENING MR num : "+materialRequestId+".",
        confirmTitle: "Open",
        cancelTitle: "Cancel",
        title: "Alert!",
        btnBgColor:"#f44336",
      },
      width: "300px",
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.reopen.emit({"materialRequestId":materialRequestId,"dataSource" : this.dataSource, 'table':this.table});
      }
      else{
        this.notifier.showSuccess("Action discarded!");
      }
    });
  }
  

  decline(materialRequestId:number){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        message: "You are DECLINING MR num : "+materialRequestId+".",
        confirmTitle: "Decline",
        cancelTitle: "Discard",
        title: "Alert!",
        btnBgColor:"#f44336",
      },
      width: "300px",
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.declined.emit({"materialRequestId":materialRequestId,"dataSource" : this.dataSource, 'table':this.table});
      }
      else{
        this.notifier.showSuccess("Action discarded!");
      }
    });
  }

  private delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}