import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthGuard} from './guard/auth.guard';
import {SubjectsComponent} from './components/subjects/subjects.component';
import {SubjectActivitiesComponent} from './components/subject-activities/subject-activities.component';


const routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // }, {
    //   path: '',
    //   component: AdminLayoutComponent,
    //   children: [
    //       {
    //     path: '',
    //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
        // children: [{ path: '', component: SignInComponent }]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            },
            {
                path: 'subjects',
                component: SubjectsComponent
            },
            {
                path: 'subject-activities',
                component: SubjectActivitiesComponent
            }]
    }

// ]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
