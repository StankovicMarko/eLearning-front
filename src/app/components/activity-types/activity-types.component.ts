import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {SubjectsService} from '../../services/subjects.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectActivityType } from '../../model/subject-activity-type';

@Component({
  selector: 'app-activity-types',
  templateUrl: './activity-types.component.html',
  styleUrls: ['./activity-types.component.scss']
})
export class ActivityTypesComponent implements OnInit {

  public types;
  public selectedType;


  updateTypeForm = new FormGroup({
    naziv: new FormControl('')
  });


  addTypeForm = new FormGroup({
    naziv: new FormControl('', Validators.required)
  });

  constructor(private subjectService: SubjectsService) { }

  ngOnInit() {

      this.getSubjectActivityTypes();
  }


  getSubjectActivityTypes() {
    this.subjectService.getSubjectActivityTypes().subscribe(
      data => { this.types = data },
      err => console.error(err),
      () => console.log('done loading types')
    );
  }


  Selected(type: any) {
    this.selectedType = type;
    this.updateTypeForm.patchValue({
      naziv: type.naziv
    });

  }

  onSubmit() {

    let type = new SubjectActivityType();
    Object.assign(type,this.updateTypeForm.value);
    type.id = this.selectedType.id;
    this.subjectService.updateSubjectActivityType(type).subscribe((data: any) => {
      this.getSubjectActivityTypes();
    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModal').click();

  }

  addType() {

    let type = new SubjectActivityType();
    Object.assign(type,this.addTypeForm.value);
    this.subjectService.addSubjectActivityType(type).subscribe((data: any) => {
      this.getSubjectActivityTypes();

    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModalAdd').click();
  }

  deleteType() {
      let type = new SubjectActivityType();
      Object.assign(type,this.selectedType);
    this.subjectService.deleteType(type).subscribe((data: any) => {
      this.getSubjectActivityTypes();
    },
      (err: any) => {
        console.log(err);
      });
      document.getElementById('closeModal').click();
  }

}
