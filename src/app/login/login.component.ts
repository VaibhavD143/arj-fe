import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:String;
  password:String;

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loginService.getLogin(this.username,this.password).subscribe(data=>{
      console.log(data);
      alert("Success!");
      this.router.navigateByUrl("/test");
    },
    error=>{
      console.error(error);
      alert("failed");
    });
    
  }

}