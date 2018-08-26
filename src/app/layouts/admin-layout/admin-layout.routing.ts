import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


import { UsersComponent } from '../../components/users/users.component';
import { TeachersComponent } from '../../components/teachers/teachers.component';
import { StudentsComponent } from '../../components/students/students.component';
import { ActivityTypesComponent } from '../../components/activity-types/activity-types.component';
import { PaymentsComponent } from '../../components/payments/payments.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'users',      component: UsersComponent },
    { path: 'teachers',      component: TeachersComponent },
    { path: 'students',      component: StudentsComponent },

    { path: 'subject-activities-types', component: ActivityTypesComponent },

    { path: 'payments', component: PaymentsComponent },


    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
