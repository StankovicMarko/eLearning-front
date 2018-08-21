import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;


  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
    this.authService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('token',data);
     this.router.navigate(['/dashboard']);
   },
   (err : HttpErrorResponse)=>{
     console.log(err);
     this.isLoginError = true;
   });
 }

}
