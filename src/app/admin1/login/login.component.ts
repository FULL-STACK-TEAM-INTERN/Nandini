import { Component, OnInit } from '@angular/core';
import{FormArray,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  employee= new Employee();
  userName:string;
  password:string;
  msg:string;

  constructor(private formBuilder:FormBuilder,private router:Router, private employees:EmployeeService) { 
    this.loginForm=formBuilder.group({
      userId:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.employees.loginUser(this.employee).subscribe(
      data=>{ console.log("response recieved");
      this.router.navigateByUrl('/employeeList');
    },
      error=> {
        console.log("exception occured");
        this.msg="Not found";
      });
   }
  moveToRegister(){
    this.router.navigateByUrl('/register');
  }
  moveToEmployeeList(){
    this.loginAdmin();
    
  }
}
