import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchDataService } from '../services/fetch-data.service';
import { FileHandlerService } from '../services/file-handler.service';
import { ErrorService } from '../utils/error.service';
import { NotificationService } from '../utils/notification.service';

@Component({
  selector: 'app-remove-file-dialog',
  templateUrl: './remove-file-dialog.component.html',
  styleUrls: ['./remove-file-dialog.component.css']
})
export class RemoveFileDialogComponent implements OnInit {

  purchaseOrders;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fetchDataService : FetchDataService,
    private fileHandlerService : FileHandlerService,
    private notifier : NotificationService,
    private errorService : ErrorService,
  ) {}

  ngOnInit(): void {
    this.loadList(this.data.materialRequestId);
  }

  loadList(materialRequestId){
    this.fetchDataService.getPurchaseOrders(materialRequestId)
    .then(data=>{
      console.log(data);
      this.purchaseOrders = data;
    })
    .catch(error=>{
      this.notifier.showError(this.errorService.getServerMessage(error));
    })
  } 
  
  removePurchaseOrder(purchaseOrderId){
    this.fileHandlerService.removePurchaseOrder(purchaseOrderId).subscribe(data=>{
      for (let i = 0; i < this.purchaseOrders.length; i++) {
        const element = this.purchaseOrders[i];
        if(element.id == purchaseOrderId){
          this.purchaseOrders.splice(i,1);
          break;
        }
      }
    },error=>{
      this.notifier.showError(this.errorService.getServerMessage(error));
    })
  }

  downloadPo(purchaseOrderId){

  }

  generateDownloadUrl(purchaseOrderId){
    return this.fileHandlerService.generateDownloadUrl(purchaseOrderId);
  }

}
