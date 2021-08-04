import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

 // Commented Below line as API is not working wanted to take a manual object
  //employee: Employee = new Employee();
 
  employee: any = {};
   employees = [
   { firstName: 'Kevin', lastName: 'peter',phoneNumber: 3435,address : 'hyd'}
   
   ];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  model: any = {};
  saveEmployee(){
    
     this.employeeService.createEmployee(this.employee).subscribe( data =>{
       console.log(data);
      if(data){
         alert('post success')
       }
       // this code is to immediately navigate to List employees
      this.goToEmployeeList();
     },
     error => console.log(error));
     //this code is just to check manually whether code is working or not by using employees array defined above
  //  this.employees.push(this.employee);

    
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
