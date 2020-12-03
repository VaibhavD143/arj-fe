import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import { PositionComponent } from './position/position.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { PopupComponent } from './popup/popup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OriginComponent } from './origin/origin.component';
import { UomComponent } from './uom/uom.component';
import { MakeComponent } from './make/make.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { MatSelectModule } from '@angular/material/select';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    HomepageComponent,
    PositionComponent,
    HeaderComponent,
    PopupComponent,
    OriginComponent,
    UomComponent,
    MakeComponent,
    CrudTableComponent,
    ServiceComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ]
})
export class AdminModule { }
