import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  admin= new Admin();
  msg:boolean=false;

  constructor(private formBuilder:FormBuilder,private router:Router, private adminService:AdminService) { 
    this.loginForm=formBuilder.group({
      userId:['',Validators.required],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  loginAdmin(){
    this.adminService.loginUser(this.admin).subscribe(
      data=>{ console.log("response recieved");
      this.router.navigateByUrl('/empList');
    },
      error=> {
        console.log("exception occured");
        this.msg=true;
        this.loginForm.reset({});
      });
   }
  moveToRegister(){
    this.router.navigateByUrl('/register');
  }
  moveToEmployeeList(){
    this.loginAdmin();
    //this.router.navigateByUrl('/empList');
  }
  closeAlert(){
    this.msg=false;
  }

}
