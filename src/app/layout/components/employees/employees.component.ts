import { Component, OnInit} from '@angular/core';
import { Employee } from './shared/employee.model';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent{
  employees: Employee[] = [];

  constructor(private employeeSerivce: EmployeeService){}

  ngOnInit(): void {
    this.employeeSerivce.getEmployees().then((employees) => (this.employees = employees));
  }
}


