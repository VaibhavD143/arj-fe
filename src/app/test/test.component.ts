import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../utils/global-constants';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  data:any;
  file : File = null;
 
  constructor(private httpClient: HttpClient) {}
 
  ngOnInit(): void {
    this.data = "Hello!"
  }

  save() {
    const formdata: FormData = new FormData();
    console.log(this.file.name);
    
    formdata.append('file', this.file,this.file.name);
    
    console.log(formdata);
    formdata.append("purchaseOrderId","1");
    console.log(formdata);
    
    this.httpClient.post('http://localhost:8010/fileSystem/test', formdata,{withCredentials:true}).subscribe(
      data => {
        console.log(data);
      },
      complete => {
        console.log('done');
      }
    );
  }

  handleFile(files : FileList){
    this.file = files.item(0);
  }

  delete() {
    let purchaseOrderId: number;
    purchaseOrderId = 3;
    this.httpClient.post('http://localhost:8010/fileSystem/delete', {"purchaseOrderId":purchaseOrderId}, {withCredentials: true}).subscribe(data=>{
      console.log(data);
      
    },error=>{
      console.error(error);
    });
  }

  
}
