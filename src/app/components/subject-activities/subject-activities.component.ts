import {Component, OnInit} from '@angular/core';
import {SubjectActivitiesService} from '../../services/subject-activities.service';
import {SubjectActivity} from '../../model/subject-activity';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectActivityType} from '../../model/subject-activity-type';
import {SubjectsService} from '../../services/subjects.service';

@Component({
    selector: 'app-subject-activities',
    templateUrl: './subject-activities.component.html',
    styleUrls: ['./subject-activities.component.scss']
})
export class SubjectActivitiesComponent implements OnInit {

    subjectActivities: SubjectActivity[];
    subjectActivityTypes: SubjectActivityType[];
    selectedSubjectActivity: SubjectActivity;
    selectedSubjectActivityType: SubjectActivityType;
    selected;

    addSubjectActivityForm = new FormGroup({
        datumAktivnosti: new FormControl('', Validators.required),
        maxBrojBodova: new FormControl('', Validators.required),
        nastavnaAktivnostId: new FormControl('', Validators.required),
        predmetId: new FormControl('', Validators.required),
    });

    updateSubjectActivityForm = new FormGroup({
        id: new FormControl(''),
        datumAktivnosti: new FormControl(''),
        maxBrojBodova: new FormControl(''),
        nastavnaAktivnostTipDto: new FormControl(''),
        predmetId: new FormControl(''),
    });

    constructor(private saService: SubjectActivitiesService, private subjectService: SubjectsService) {
    }

    ngOnInit() {
        this.getAllSubjectActivities();
        this.getAllSubjectActivityType();
    }

    getAllSubjectActivities() {
        this.saService.getSubjectActivities().subscribe((data: SubjectActivity[]) => {
            this.subjectActivities = data;
        });
    }

    getAllSubjectActivityType() {
        this.subjectService.getSubjectActivityTypes().subscribe((data: SubjectActivityType[]) => {
            this.subjectActivityTypes = data;
        });
    }

    addSubjectActivity() {
        document.getElementById('closeModalAdd').click();
    }

    deleteSubjectActivity() {
        this.saService.deleteSubjectActivity(this.selectedSubjectActivity.id).subscribe((data: any) => {
            this.getAllSubjectActivities();
        });
        document.getElementById('closeModal').click();
    }

    Selected(subjectActivity: SubjectActivity) {
        this.selectedSubjectActivity = subjectActivity;
        this.updateSubjectActivityForm.patchValue({
            id: subjectActivity.id,
            datumAktivnosti: subjectActivity.datumAktivnosti,
            maxBrojBodova: subjectActivity.maxBrojBodova,
            nastavnaAktivnostTipDto: subjectActivity.nastavnaAktivnostTipDto.naziv,
            predmetId: subjectActivity.predmetId,
        });
        this.getAllSubjectActivities();
        this.selected = subjectActivity.nastavnaAktivnostTipDto.naziv;
    }

    onSubmit() {
        const subjectActivity = Object.assign({}, this.updateSubjectActivityForm.value);
        subjectActivity.nastavnaAktivnostTipDto = this.selectedSubjectActivityType;
        this.saService.updateSubjectActivity(subjectActivity).subscribe((data: SubjectActivity) => {
                this.getAllSubjectActivities();
            },
            (err: any) => {
                console.log(err);
            });
        document.getElementById('closeModal').click();
    }

    selectSubjectActivityType(name: string) {
        this.selectedSubjectActivityType = this.subjectActivityTypes.find(sat => sat.naziv === name);
    }

}
