import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { EmpLoginComponent } from './employee/emp-login/emp-login.component';
import { EmpRegisterComponent } from './employee/emp-register/emp-register.component';

const routes: Routes = [
  {path:'',redirectTo:'empLogin',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'empRegister',component:EmpRegisterComponent},
  {path:'empLogin',component:EmpLoginComponent},
  {path:'empList',component:EmployeeListComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
