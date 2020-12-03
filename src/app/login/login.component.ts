import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:String;
  password:String;

  constructor(
    private loginService:LoginService,
    private router: Router,
    private storageServie : StorageService,
    ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loginService.getLogin(this.username,this.password).subscribe(data=>{
      console.log(data);
      this.storageServie.set("employeeId",data["employeeId"]);
      this.storageServie.set("name",data["name"]);
      this.storageServie.set("username",data["username"]);
      this.storageServie.set("hierarchy",data["hierarchy"]);
      this.storageServie.set("rolename",data["rolename"]);
      alert("Success!");
      this.router.navigateByUrl("/home");
    },
    error=>{
      console.error(error);
      alert("failed");
    });

  }

}
