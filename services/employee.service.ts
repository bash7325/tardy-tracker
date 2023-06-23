import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    new Employee('Corey'),
    new Employee('Benny'),
    new Employee('Ian'),
    new Employee('Bret'),
    new Employee('Abe'),
    new Employee('Josh'),
    new Employee('Alex')
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addArrivalTime(name: string, time: Date): void {
    const employee = this.employees.find(e => e.name === name);
    if (employee) {
      employee.arrivalTimes.push(time);
    }
  }
}
