import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getEmployees();

    // this.employees = [
    //   {
    //     id: 1,
    //     firstName: 'Anagha',
    //     lastName: 'AAA',
    //     emailId: 'abaf@gmail.com',
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Anu',
    //     lastName: 'KKKK',
    //     emailId: 'mnoha@gmail.com',
    //   },
    // ];
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
      // 3. Manually trigger the UI update
      this.cdr.detectChanges();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['/employee-details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['/update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(
      (data) => {
        this.getEmployees();
      },
      (error) => console.log(error),
    );
  }
}
