import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';


import { UsersComponent } from '../../components/users/users.component';
import { TeachersComponent } from '../../components/teachers/teachers.component';
import { StudentsComponent } from '../../components/students/students.component';
import { ActivityTypesComponent } from '../../components/activity-types/activity-types.component';
import { PaymentsComponent } from '../../components/payments/payments.component';

import { DocumentsComponent } from '../../components/documents/documents.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'users',      component: UsersComponent },
    { path: 'teachers',      component: TeachersComponent },
    { path: 'students',      component: StudentsComponent },

    { path: 'subject-activities-types', component: ActivityTypesComponent },

    { path: 'payments', component: PaymentsComponent },

    { path: 'documents', component: DocumentsComponent },


    { path: 'dashboard',      component: DashboardComponent },
];
