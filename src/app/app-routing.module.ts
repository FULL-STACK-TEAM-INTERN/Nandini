import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './admin1/employee-list/employee-list.component';
import { HomeComponent } from './admin1/home/home.component';
import { LoginComponent } from './admin1/login/login.component';
import { RegisterComponent } from './admin1/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DemoComponent } from './demo/demo.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'', redirectTo:'admin-view', pathMatch:'full'},
  {path:'admin', component:AdminHomeComponent,canActivate:[AdminGuardGuard]},
  {path:'signin',component:SigninComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'demo',component:DemoComponent},
  {path:'employeeList', component:EmployeeListComponent},
  {path:'home',component:HomeComponent}
]
  @NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
