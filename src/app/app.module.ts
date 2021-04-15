import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DemoComponent } from './demo/demo.component'
import {LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './admin1/login/login.component';
import { RegisterComponent } from './admin1/register/register.component';
import { EmployeeListComponent } from './admin1/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './admin1/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AdminComponent,
    AdminViewComponent,
    AdminEditComponent,
    AdminHomeComponent,
    SigninComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:LocationStrategy, useClass:PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
