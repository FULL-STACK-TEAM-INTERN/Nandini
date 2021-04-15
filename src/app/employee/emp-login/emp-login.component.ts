import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  loginForm:FormGroup;
  employee= new Employee();
  msg:boolean=false;

  constructor(private formBuilder:FormBuilder,private router:Router, private employeeService:EmployeeService ) {
    this.loginForm=formBuilder.group({
      userId:['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  loginAdmin(){
    this.employeeService.loginUser(this.employee).subscribe(
      data=>{ console.log("response recieved");
      //this.router.navigateByUrl('/employeeList');
    },
      error=> {
        console.log("exception occured");
        this.msg=true;
        this.loginForm.reset({});
      });
   }
  moveToRegister(){
    this.router.navigateByUrl('/empRegister');
  }
  moveToEmployeeList(){
  this.loginAdmin();
  }
  closeAlert(){
    this.msg=false;
  }

}
