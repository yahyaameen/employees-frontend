import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'create-employee', component: AddEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
