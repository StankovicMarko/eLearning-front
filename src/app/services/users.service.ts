import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UsersService {

  readonly rootUrl = 'http://localhost:8080/api';


  constructor(private http:HttpClient) {}

  getAdmins(){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});

    return this.http.get(this.rootUrl+'/users/admin', {headers : headers});
  }

  getTeachers(){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});

    return this.http.get(this.rootUrl+'/users/nastavnik', {headers : headers});
  }

  getStudents(){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});

    return this.http.get(this.rootUrl+'/users/ucenik', {headers : headers});
  }

}
