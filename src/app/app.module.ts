import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './admin/register/register.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './admin/login/login.component';
import { EmpRegisterComponent } from './employee/emp-register/emp-register.component';
import { EmpLoginComponent } from './employee/emp-login/emp-login.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmpRegisterComponent,
    EmpLoginComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
