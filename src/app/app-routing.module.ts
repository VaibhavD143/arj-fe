import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMRComponent } from './create-mr/create-mr.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import {HomepageComponent} from './admin/homepage/homepage.component';
import {PositionComponent} from './admin/position/position.component';

const routes: Routes = [
    {path:"test",component:TestComponent},
    {path:"createmr",component:CreateMRComponent},
    {path:"login",component:LoginComponent},
    {path:"admin", component: HomepageComponent},
    {path:"position", component: PositionComponent},
    {path:"",redirectTo:"login",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
