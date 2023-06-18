import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  addEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      this.router.navigate(['/employees']);
    },
    error => console.log(error));
  }
}
