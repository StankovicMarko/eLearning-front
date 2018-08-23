import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public admins;
  public teachers;
  public students;



  constructor(private usersService: UsersService) { }

  ngOnInit() {

    //ovde ces reci, e a ko je rola admin uzmi sve ako nije uzmi samo 2
    
    this.getAdmins();
    this.getTeachers();
    this.getStudents();



  }

  getAdmins(){
    this.usersService.getAdmins().subscribe(
      data => { this.admins = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }


  getTeachers(){
    this.usersService.getTeachers().subscribe(
      data => { this.teachers = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  getStudents(){
    this.usersService.getStudents().subscribe(
      data => { this.students = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }
  }
