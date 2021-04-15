import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  admin=new Admin();
  constructor(private formBuilder:FormBuilder,private router:Router, private adminService:AdminService) {
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
    this.adminService.registerList(this.admin).subscribe(data=>{
      console.log(data);
    }, error=> console.log(error));
  }

  moveToLogin(){
    console.log(this.admin);
    this.saveEmployee();
   this.router.navigateByUrl('/login');
  }

}
