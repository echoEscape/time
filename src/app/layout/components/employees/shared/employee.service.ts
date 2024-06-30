import { Injectable } from '@angular/core';

import { EMPLOYEES } from './mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return Promise.resolve(EMPLOYEES);
  }

}
