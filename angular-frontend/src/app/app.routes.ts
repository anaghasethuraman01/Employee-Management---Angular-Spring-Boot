import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { EmployeeDetails } from './employee-details/employee-details';
import { UpdateEmployee } from './update-employee/update-employee';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeeList,
  },

  { path: 'create-employee', component: CreateEmployee },
  { path: 'employee-details/:id', component: EmployeeDetails },
  { path: 'update-employee/:id', component: UpdateEmployee },
];
