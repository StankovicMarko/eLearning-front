import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { UsersComponent } from '../../components/users/users.component';

import { TeachersComponent } from '../../components/teachers/teachers.component';

import { StudentsComponent } from '../../components/students/students.component';
import { ActivityTypesComponent } from '../../components/activity-types/activity-types.component';
import { PaymentsComponent } from '../../components/payments/payments.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    TeachersComponent,
    StudentsComponent,
    ActivityTypesComponent,
    PaymentsComponent
  ]
})

export class AdminLayoutModule {}
