import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { FileHandlerService } from '../services/file-handler.service';

@Component({
  selector: 'app-handle-file-dialog',
  templateUrl: './handle-file-dialog.component.html',
  styleUrls: ['./handle-file-dialog.component.css']
})
export class HandleFileDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HandleFileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fileHandlerService : FileHandlerService,

  ) {}

  ngOnInit(): void {
  }

  @ViewChild('file', { static: false }) file;

  public files: Set<File> = new Set();

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.fileHandlerService.uploadFiles(this.files,this.data.materialRequestId);
    console.log(this.progress);
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

}
