import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Teacher } from '../model/teacher';
import { Admin } from '../model/admin';
import { Student } from '../model/student';



@Injectable()
export class UsersService {

  readonly rootUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  getAdmins() {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });

    return this.http.get(this.rootUrl + '/users/admin', { headers: headers });
  }

  getTeachers() {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });

    return this.http.get(this.rootUrl + '/users/nastavnik', { headers: headers });
  }

  getStudents() {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });

    return this.http.get(this.rootUrl + '/users/ucenik', { headers: headers });
  }


  updateUser(user) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });

    if (user instanceof Teacher) {
      return this.http.put(this.rootUrl + '/users/nastavnik/' + user.id, user, { headers: headers });

    } else if (user instanceof Admin) {

      return this.http.put(this.rootUrl + '/users/admin/' + user.id, user, { headers: headers });
    }
    else if (user instanceof Student) {

     return this.http.put(this.rootUrl + '/users/ucenik/' + user.id, user, { headers: headers });
   }
  }

  deleteUser(user) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });

    if (user instanceof Teacher) {
      return this.http.delete(this.rootUrl + '/users/nastavnik/' + user.id, { headers: headers });
    } else if (user instanceof Admin) {

      return this.http.delete(this.rootUrl + '/users/admin/' + user.id, { headers: headers });
    }else if (user instanceof Student) {

     return this.http.delete(this.rootUrl + '/users/ucenik/' + user.id, { headers: headers });
   }
  }

  addUser(user) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });


    if (user instanceof Teacher) {
      return this.http.post(this.rootUrl + '/users/nastavnik/', user, { headers: headers });

    } else if (user instanceof Admin) {

      return this.http.post(this.rootUrl + '/users/admin/', user, { headers: headers });


    }else if (user instanceof Student) {

     return this.http.post(this.rootUrl + '/users/ucenik/', user, { headers: headers });
   }

  }
}
