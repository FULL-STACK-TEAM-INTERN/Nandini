import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee:Employee[];

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  private getEmployee(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employee=data;
    });
  }
  updateEmployee(id:number){
    this.router.navigate(['updateEmployee',id]);
  }

}
