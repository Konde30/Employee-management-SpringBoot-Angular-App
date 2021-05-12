import { Component, NgModule } from '@angular/core';


import {Routes,RouterLink, RouterModule} from '@angular/router'
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes=[
      {path:'create-employee',component: CreateEmployeeComponent},
      {path:'all-employee',component:AllEmployeeComponent },
      {path:'update-employee',component:UpdateEmployeeComponent},
      {path:'employee-details',component:EmployeeDetailsComponent},
      { path: 'employees', component: AllEmployeeComponent },
      { path: 'add', component: CreateEmployeeComponent },
      { path: 'update/:id', component: UpdateEmployeeComponent },
      { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRoutingModule {
  
}
