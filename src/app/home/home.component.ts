import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';
import { GlobalConstants } from '../utils/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navConfig;

  constructor(
    private router: Router,
    public storageService: StorageService,
    private loginService : LoginService,
  ) { 
    if(this.storageService.get("employeeId")==null){
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
    this.navConfig = GlobalConstants.config[this.storageService.get("hierarchy")];
  }

  logout(){
    console.log("logging out....");
    this.storageService.clear();
    // this.loginService.logout();
    this.router.navigateByUrl("/");
  }

}
