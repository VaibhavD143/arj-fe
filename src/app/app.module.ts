import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { TestComponent } from './test/test.component';
import { CreateMrFormComponent } from './create-mr-form/create-mr-form.component';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';
import { AdminModule} from './admin/admin.module';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatListModule} from '@angular/material/list';
import { ProcessedRequestComponent } from './processed-request/processed-request.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { MaterialRequestTableComponent } from './material-request-table/material-request-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { OpenComponent } from './open/open.component';
import { HandleFileDialogComponent } from './handle-file-dialog/handle-file-dialog.component';
import { RemoveFileDialogComponent } from './remove-file-dialog/remove-file-dialog.component';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ClosedComponent } from './closed/closed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    CreateMrFormComponent,
    ProcessedRequestComponent,
    PendingRequestComponent,
    MaterialRequestTableComponent,
    ConfirmationDialogComponent,
    OpenComponent,
    HandleFileDialogComponent,
    RemoveFileDialogComponent,
    HomeComponent,
    ClosedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule,
    AdminModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
