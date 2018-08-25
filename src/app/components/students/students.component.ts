import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {


    public students;
    public selectedUser;


    updateUserForm = new FormGroup({
      username: new FormControl(''),
      ime: new FormControl(''),
      prezime: new FormControl(''),
      adresa: new FormControl(''),
      mestoId: new FormControl(''),
      telefon: new FormControl(''),
      datumRodjenja: new FormControl(''),
      pol: new FormControl(''),
      indeks: new FormControl(''),
      radniStatus: new FormControl(''),
      zanimanje: new FormControl(''),
      brojRacuna: new FormControl(''),
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
      indeks: new FormControl('', Validators.required),
      radniStatus: new FormControl('', Validators.required),
      zanimanje: new FormControl(''),
      brojRacuna: new FormControl('', Validators.required),
    });


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getStudents();

  }



    getStudents() {
      this.usersService.getStudents().subscribe(
        data => { this.students = data },
        err => console.error(err),
        () => console.log('done loading students')
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
        indeks: user.indeks,
        radniStatus: user.radniStatus,
        zanimanje: user.zanimanje,
        brojRacuna: user.brojRacuna
      });

    }

    onSubmit() {

      let user = new Student();
      Object.assign(user,this.updateUserForm.value);
      user.password = this.selectedUser.password;
      user.id = this.selectedUser.id;
      this.usersService.updateUser(user).subscribe((data: any) => {
        this.getStudents();
      },
        (err: any) => {
          console.log(err);
        });
        document.getElementById('closeModal').click();

    }

    addUser() {

      let user = new Student();
      Object.assign(user,this.addUserForm.value);
      this.usersService.addUser(user).subscribe((data: any) => {
        this.getStudents();

      },
        (err: any) => {
          console.log(err);
        });
        document.getElementById('closeModalAdd').click();
    }

    deleteUser() {
        let user = new Student();
        Object.assign(user,this.selectedUser);
      this.usersService.deleteUser(user).subscribe((data: any) => {
        this.getStudents();
      },
        (err: any) => {
          console.log(err);
        });
        document.getElementById('closeModal').click();
    }

}
