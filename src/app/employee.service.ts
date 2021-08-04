import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


 private baseURL = "https://5wvf7b1187.execute-api.us-west-2.amazonaws.com/default/interviewTest";

   constructor(private httpClient: HttpClient) { }
   ngOnInIt(){
     // Added Cors Code From  Client Side but Cors issue still need to be addresssed from AWS Cloud 
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');

   }
  
   
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee,{
      headers :new HttpHeaders().set('Access-Control-Allow-Origin', '*')

    })
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
