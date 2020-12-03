import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ErrorService } from '../utils/error.service';
import { GlobalConstants } from '../utils/global-constants';
import { NotificationService } from '../utils/notification.service';
import { FetchDataService } from './fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {

  constructor(
    private httpClient : HttpClient,
    private notifier : NotificationService,
    private errorService : ErrorService,
  ) { }

  uploadFiles(files :Set<File>, materialRequestId){
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append("materialRequestId",materialRequestId);

      
      // this.httpClient.post(GlobalConstants.uploadPo,formData,{reportProgress:true}).subscribe(event => {
      //   if (event.type === HttpEventType.UploadProgress) {
      //     // calculate the progress percentage

      //     const percentDone = Math.round((100 * event.loaded) / event.total);
      //     // pass the percentage into the progress-stream
      //     progress.next(percentDone);
      //   } else if (event instanceof HttpResponse) {
      //     // Close the progress-stream if we get an answer form the API
      //     // The upload is complete
      //     progress.complete();
      //   }
      // });;

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', GlobalConstants.uploadPo, formData, {
        withCredentials : true,
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates

      const startTime = new Date().getTime();
      this.httpClient.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage

          const percentDone = Math.round((100 * event.loaded) / event.total);
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      },error=>{
        this.notifier.showError(this.errorService.getServerMessage(error));
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }

  removePurchaseOrder(purchaseOrderId){
    return this.httpClient.post(GlobalConstants.deletePo,{"purchaseOrderId":purchaseOrderId},{withCredentials:true});
  }

  generateDownloadUrl(purchaseOrderId){
    return GlobalConstants.downloadPo+"?purchaseOrderId="+purchaseOrderId;
  }

  downloadPo(purchaseOrderId){

  }

}
