import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {

  readonly rootUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }


  userAuthentication(userName, password) {
      var data = {"username" : userName,
                  "password" : password};
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
      return this.http.post(this.rootUrl, data, { headers: reqHeader });
    }
}
