import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  imports: [FormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef,
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
    this.goToEmployeeList();
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
