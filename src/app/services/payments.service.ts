import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PaymentsService {

  readonly rootUrl = 'http://localhost:8080/api/uplata';

  constructor(private http: HttpClient) { }


  getPayments() {
      return this.http.get(this.rootUrl);
  }

  addPayment(payment) {
      return this.http.post(this.rootUrl, payment);
  }

  updatePayment(payment) {
      return this.http.put(this.rootUrl + '/' + payment.id, payment);
  }

  deletePayment(payment) {
      return this.http.delete(this.rootUrl + '/' + payment.id);
  }
}
