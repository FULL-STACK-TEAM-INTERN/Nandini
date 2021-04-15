import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employee:Employee[];

  ngOnInit(): void {
    this.getEmployee();
    }
  private getEmployee(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employee=data;
    });
  }
  }
  


