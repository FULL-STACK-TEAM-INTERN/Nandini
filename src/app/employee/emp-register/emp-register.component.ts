import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {
  registerForm:FormGroup;
  employee=new Employee();
  constructor(private formBuilder:FormBuilder,private router:Router, private employeeService:EmployeeService ) {
    this.registerForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      lastName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      password:['',Validators.required],
      DOB:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      address:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.registerList(this.employee).subscribe(data=>{
      console.log(data);
    }, error=> console.log(error));
  }
  moveToLogin(){
    console.log(this.employee);
    this.saveEmployee();
   this.router.navigateByUrl('/empLogin');
  }

}
