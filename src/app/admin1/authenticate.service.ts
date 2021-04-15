import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
 userName:string;
 password:string;
 constructor(private httpClient:HttpClient) { }
}
