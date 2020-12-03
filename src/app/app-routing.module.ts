import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import {HomepageComponent} from './admin/homepage/homepage.component';
import {PositionComponent} from './admin/position/position.component';
import { HomeComponent } from './home/home.component';
import { MakeComponent } from './admin/make/make.component';
import { UomComponent } from './admin/uom/uom.component';
import { OriginComponent } from './admin/origin/origin.component';
import { ServiceComponent } from './admin/service/service.component';

const routes: Routes = [
    {path:"test",component:TestComponent},
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"admin", component: HomepageComponent},
    {path:"service", component: ServiceComponent},
    {path:"position", component: PositionComponent},
    {path:"make", component: MakeComponent},
    {path:"uom", component: UomComponent},
    {path:"origin", component: OriginComponent},
    {path:"",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
