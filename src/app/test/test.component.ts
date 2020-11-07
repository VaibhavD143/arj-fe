import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data:any;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.data = "Hello!"
  }

  onClick(){
    this.httpClient.get("http://localhost:8010/admin/uom",{withCredentials:true}).subscribe(data=>{
      this.data = data; 
    },
    error=>{
      console.error(error);
    });

  }

}
