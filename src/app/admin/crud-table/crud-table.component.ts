import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { ErrorService } from 'src/app/utils/error.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  @Input() columnsToDisplay;
  @Input() data;
  @Input() elementName;
  
  @Output() save = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  

  dataSource;
  updatedElement;


  constructor(
    public dialog: MatDialog,
    public adminService:AdminService,
    private notifier : NotificationService,
    private errorService : ErrorService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange){
    this.loadTable();
  }

  loadTable(){
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data); 
  }

  
  public openSavePopup(){
    
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {elementName: this.elementName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined)
        this.save.emit({"element":result,"dataSource":this.dataSource});
    });
  }

  
  public openUpdatePopup(updateElement){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {
        elementName: this.elementName,
        element: updateElement,
        update: true}
      });
      
      dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined)
        this.update.emit({"element":result,"dataSource":this.dataSource});
    });
  }

  
  public openConfirmDeletePopup(deleteElement){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "40%",
      data: {
        elementName: "delete",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=undefined){
        this.delete.emit({'element':deleteElement,"dataSource":this.dataSource});
      }
    });
  }

}
