import { Component, OnInit , ViewChild} from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public admins;
  public teachers;
  public students;

  public selectedUser;




//  @ViewChild('closeModal') closeModal: HTMLButtonElement;

  updateUserForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    ime: new FormControl(''),
    prezime: new FormControl(''),
    adresa: new FormControl(''),
    mestoId: new FormControl(''),
    telefon: new FormControl(''),
    datumRodjenja: new FormControl(''),
    pol: new FormControl('')
  });



  constructor(private usersService: UsersService,  private router: Router) { }

  ngOnInit() {

    //ovde ces reci, e a ko je rola admin uzmi sve ako nije uzmi samo 2

    this.getAdmins();
    this.getTeachers();
    this.getStudents();



  }

  getAdmins() {
    this.usersService.getAdmins().subscribe(
      data => { this.admins = data },
      err => console.error(err),
      () => console.log('done loading admins')
    );
  }


  getTeachers() {
    this.usersService.getTeachers().subscribe(
      data => { this.teachers = data },
      err => console.error(err),
      () => console.log('done loading teachers')
    );
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
      pol: user.pol
    });

  }

  onSubmit() {

    let user = Object.assign({},this.updateUserForm.value);
    user.password = this.selectedUser.password;
    this.usersService.updateUser(user).subscribe((data: any) => {
      this.getAdmins();



    },
      (err: any) => {
        console.log(err);
      });
      closeModal.click();
  }

  deleteUser() {
    this.usersService.deleteUser(this.selectedUser.id).subscribe((data: any) => {
      this.getAdmins();
    },
      (err: any) => {
        console.log(err);
      });
      closeModal.click();
  }

}
