import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  readonly rootUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }


  userAuthentication(userName, password) {
      var data = {"username" : userName,
                  "password" : password};
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth':'True'});
      return this.http.post(this.rootUrl, data, { headers: reqHeader });
  };

    getCurrentUserType() {
        const token = localStorage.getItem('token');
        const jwtHelper = new JwtHelperService();
        const decodedToken = jwtHelper.decodeToken(token);
        return decodedToken['authority'];
    }

}
