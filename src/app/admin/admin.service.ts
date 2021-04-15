import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl="http://localhost:8080/api/v1/employees";
  private baseUrl1="http://localhost:8080/api/v1/employeesupdate";

  constructor(private httpClient:HttpClient) { }

  getEmployeesList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`);
  }

  registerList(admin:Admin):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,admin);
}
  public loginUser(admin:Admin):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/api/v1/adminlogin",admin);
}
getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseUrl1}/${id}`);
  }
  
  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl1}/${id}`,employee);

  }
  updateEmployees(employee){
    return this.httpClient.put("http://localhost:8080/api/v1/updateEmployee",employee);
  }

}

