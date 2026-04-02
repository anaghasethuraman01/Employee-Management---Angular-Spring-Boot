import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeService.createEmployees(this.employee).subscribe(
      (data) => {
        console.log('Response', data);
        this.goToEmployeeList();
      },
      (error) => console.log(error),
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
