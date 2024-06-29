import { Component, inject} from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent{
  private readonly employeeService = inject(EmployeeService);
  readonly employees = this.employeeService.getEmployeeList();

}


