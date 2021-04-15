import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm:FormGroup;
  id:number;
  employee=new Employee();

  constructor(private formBuilder:FormBuilder,private router:ActivatedRoute,private adminService:AdminService) {
    this.updateForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      lastName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      password:['',Validators.required],
      DOB:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      address:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.adminService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error => console.log('error'));
  }
  updateEmployee(){
    this.adminService.updateEmployees(this.employee).subscribe(data=>{
      console.log(data);
      this.employee=new Employee();
    },error=>console.log('error'));

 }

}
