import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PaymentsService } from '../../services/payments.service';
import {AuthService} from '../../auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../../model/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {


  public payments;
  public selectedPayment;
  currentUserType: string;



  updatePaymentForm = new FormGroup({
    brojRacuna: new FormControl(''),
    uplatilac: new FormControl(''),
    svrhaUplate: new FormControl(''),
    datumUplate: new FormControl(''),
    iznos: new FormControl(''),
    ucenikId: new FormControl('')

  });


  addPaymentForm = new FormGroup({
    brojRacuna: new FormControl('', Validators.required),
    uplatilac: new FormControl('', Validators.required),
    svrhaUplate: new FormControl('', Validators.required),
    datumUplate: new FormControl('', Validators.required),
    iznos: new FormControl('', Validators.required),
    ucenikId: new FormControl('', Validators.required)
  });

  constructor(private paymentsService: PaymentsService,  private authService: AuthService) { }

  ngOnInit() {


    this.getPayments();
    this.currentUserType = this.authService.getCurrentUserType();

  }

  getPayments() {
    this.paymentsService.getPayments().subscribe(
      data => { this.payments = data },
      err => console.error(err),
      () => console.log('done loading payments')
    );
  }


  Selected(payment: any) {
    this.selectedPayment = payment;
    this.updatePaymentForm.patchValue({
      id: payment.id,
      brojRacuna: payment.brojRacuna,
      uplatilac: payment.uplatilac,
      svrhaUplate: payment.svrhaUplate,
      datumUplate: payment.datumUplate,
      iznos: payment.iznos,
      ucenikId: payment.ucenikId,
    });

  }

  onSubmit() {

    let payment = new Payment();
    Object.assign(payment, this.updatePaymentForm.value);
    payment.id = this.selectedPayment.id;
    this.paymentsService.updatePayment(payment).subscribe((data: any) => {
      this.getPayments();
    },
      (err: any) => {
        console.log(err);
      });
    document.getElementById('closeModal').click();

  }

  addPayment() {

    let payment = new Payment();
    Object.assign(payment, this.addPaymentForm.value);
    this.paymentsService.addPayment(payment).subscribe((data: any) => {
      this.getPayments();

    },
      (err: any) => {
        console.log(err);
      });
    document.getElementById('closeModalAdd').click();
  }

  deletePayment() {
    let payment = new Payment();
    Object.assign(payment, this.selectedPayment);
    this.paymentsService.deletePayment(payment).subscribe((data: any) => {
      this.getPayments();
    },
      (err: any) => {
        console.log(err);
      });
    document.getElementById('closeModal').click();
  }

}
