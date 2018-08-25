import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from '../../model/teacher';




@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {


  public teachers;
  public selectedUser;


  updateUserForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    ime: new FormControl(''),
    prezime: new FormControl(''),
    adresa: new FormControl(''),
    mestoId: new FormControl(''),
    telefon: new FormControl(''),
    datumRodjenja: new FormControl(''),
    pol: new FormControl(''),
    nastavnikTipId: new FormControl('')
  });


  addUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    ime: new FormControl('', Validators.required),
    prezime: new FormControl('', Validators.required),
    adresa: new FormControl('', Validators.required),
    mestoId: new FormControl('', Validators.required),
    telefon: new FormControl('', Validators.required),
    datumRodjenja: new FormControl('', Validators.required),
    pol: new FormControl('', Validators.required),
    nastavnikTipId: new FormControl('', Validators.required)
  });


  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.getTeachers();
  }

  getTeachers() {
    this.usersService.getTeachers().subscribe(
      data => { this.teachers = data },
      err => console.error(err),
      () => console.log('done loading teachers')
    );
  }


  Selected(user: any) {
    this.selectedUser = user;
    this.updateUserForm.patchValue({
      id: user.id,
      username: user.username,
      ime: user.ime,
      prezime: user.prezime,
      adresa: user.adresa,
      mestoId: user.mestoId,
      telefon: user.telefon,
      datumRodjenja: user.datumRodjenja,
      pol: user.pol,
      nastavnikTipId: user.nastavnikTipId
    });

  }

  onSubmit() {

    let user = new Teacher();
    Object.assign(user,this.updateUserForm.value);
    user.password = this.selectedUser.password;
    this.usersService.updateUser(user).subscribe((data: any) => {
      this.getTeachers();
    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModal').click();

  }

  addUser() {

    let user = new Teacher();
    Object.assign(user,this.addUserForm.value);
    this.usersService.addUser(user).subscribe((data: any) => {
      this.getTeachers();

    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModalAdd').click();
  }

  deleteUser() {
      let user = new Teacher();
      Object.assign(user,this.selectedUser);
    this.usersService.deleteUser(user).subscribe((data: any) => {
      this.getTeachers();
    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModal').click();
  }

}
