import { Component} from '@angular/core';
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
  noEmployeesOnline: number = 0;

  constructor(private employeeService: EmployeeService){this.getEmployeesOnline();}

  ngOnInit(): void {
    this.employeeService.getEmployees().then((employees) => (this.employees = employees));
  }

  getEmployeesOnline(): void{
    console.log(this.employees);
    
    /*for(let key in this.employees){
      this.employees[key].forEach(function(employee){
        if(employee.status == "online"){
          this.noEmployeesOnline += 1;
        }
      })
    }*/

  }

}


