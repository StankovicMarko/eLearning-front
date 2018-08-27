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

    return this.http.get(this.rootUrl + '/users/admin');
  }

  getTeachers() {

    return this.http.get(this.rootUrl + '/users/nastavnik');
  }

  getStudents() {

    return this.http.get(this.rootUrl + '/users/ucenik');
  }


  updateUser(user) {

    if (user instanceof Teacher) {
      return this.http.put(this.rootUrl + '/users/nastavnik/' + user.id, user);

    } else if (user instanceof Admin) {

      return this.http.put(this.rootUrl + '/users/admin/' + user.id, user );
    }
    else if (user instanceof Student) {

     return this.http.put(this.rootUrl + '/users/ucenik/' + user.id, user);
   }
  }

  deleteUser(user) {


    if (user instanceof Teacher) {
      return this.http.delete(this.rootUrl + '/users/nastavnik/' + user.id);
    } else if (user instanceof Admin) {

      return this.http.delete(this.rootUrl + '/users/admin/' + user.id);
    }else if (user instanceof Student) {

     return this.http.delete(this.rootUrl + '/users/ucenik/' + user.id);
   }
  }

  addUser(user) {



    if (user instanceof Teacher) {
      return this.http.post(this.rootUrl + '/users/nastavnik/', user);

    } else if (user instanceof Admin) {

      return this.http.post(this.rootUrl + '/users/admin/', user);


    }else if (user instanceof Student) {

     return this.http.post(this.rootUrl + '/users/ucenik/', user);
   }

  }
}
