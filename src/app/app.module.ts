import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';

import {AuthGuard} from './guard/auth.guard';
import {AuthInterceptor} from './guard/auth.interceptor';
import {SubjectsComponent} from './components/subjects/subjects.component';
import {SubjectsService} from './services/subjects.service';

import {UsersService} from './services/users.service';
import {MatInputModule} from '@angular/material';
import {SubjectActivitiesService} from './services/subject-activities.service';
import {SubjectActivitiesComponent} from './components/subject-activities/subject-activities.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
      ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
      MatInputModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
      SubjectsComponent,
      SubjectActivitiesComponent
  ],
  providers: [AuthService,
    AuthGuard,
    UsersService,
    SubjectsService,
      SubjectActivitiesService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
