import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
        this.cdr.detectChanges();
      },
      (error) => console.log(error),
    );
  }

  onSubmit() {
    this.updateEmployee();
  }
  updateEmployee() {
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(
      (data) => {
        this.goToEmployeeList();
      },
      (error) => console.log(error),
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
