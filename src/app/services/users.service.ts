import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Teacher } from '../model/teacher';


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


  updateUser(user){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});

    if(user instanceof Teacher){
      return this.http.put(this.rootUrl+'/users/nastavnik/'+user.id, user, {headers : headers});

    }

    return this.http.put(this.rootUrl+'/users/admin/'+user.id, user, {headers : headers});
  }

  deleteUser(user){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});


    if(user instanceof Teacher){
      return this.http.delete(this.rootUrl+'/users/nastavnik/'+user.id, {headers : headers});
    }

    return this.http.delete(this.rootUrl+'/users/admin/'+user.id, {headers : headers});
  }

  addUser(user){
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'False'});


    if(user instanceof Teacher){
      return this.http.post(this.rootUrl+'/users/nastavnik/', user, {headers : headers});

    }

    return this.http.post(this.rootUrl+'/users/admin/',user, {headers : headers});
  }

}
