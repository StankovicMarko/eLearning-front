import {Component, OnInit} from '@angular/core';
import {SubjectActivitiesService} from '../../services/subject-activities.service';
import {SubjectActivity} from '../../model/subject-activity';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectActivityType} from '../../model/subject-activity-type';
import {SubjectsService} from '../../services/subjects.service';
import {Subject} from '../../model/subject';

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
    subjects: Subject[];
    selectedSubject: Subject;
    selected;
    selectedSub;

    addSubjectActivityForm = new FormGroup({
        datumAktivnosti: new FormControl('', Validators.required),
        maxBrojBodova: new FormControl('', Validators.required),
        nastavnaAktivnostTipDto: new FormControl('', Validators.required),
        predmet: new FormControl('', Validators.required),
    });

    updateSubjectActivityForm = new FormGroup({
        id: new FormControl(''),
        datumAktivnosti: new FormControl(''),
        maxBrojBodova: new FormControl(''),
        nastavnaAktivnostTipDto: new FormControl(''),
        predmet: new FormControl(''),
    });

    constructor(private saService: SubjectActivitiesService, private subjectService: SubjectsService) {
    }

    ngOnInit() {
        this.getAllSubjects();
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

    getAllSubjects() {
        this.subjectService.getSubjects().subscribe((data: Subject[]) => {
            this.subjects = data;
        });
    }

    addSubjectActivity() {
        const subjectActivity = Object.assign({}, this.addSubjectActivityForm.value);
        subjectActivity.nastavnaAktivnostTipDto = this.selectedSubjectActivityType;
        subjectActivity.predmet = this.selectedSubject;
        this.saService.addSubjectActivity(subjectActivity).subscribe((data: SubjectActivity) => {
                this.getAllSubjectActivities();
            },
            (err: any) => {
                console.log(err);
            });
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
            predmet: subjectActivity.predmet.naziv,
        });
        this.getAllSubjectActivities();
        this.selected = subjectActivity.nastavnaAktivnostTipDto.naziv;
        this.selectedSub = subjectActivity.predmet.naziv;
    }

    onSubmit() {
        const subjectActivity = Object.assign({}, this.updateSubjectActivityForm.value);
        this.selectSubjectActivityType(subjectActivity.nastavnaAktivnostTipDto);
        subjectActivity.nastavnaAktivnostTipDto = this.selectedSubjectActivityType;
        this.selectSubject(subjectActivity.predmet);
        subjectActivity.predmet = this.selectedSubject;
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

    selectSubject(name: string) {
        this.selectedSubject = this.subjects.find(subject => subject.naziv === name);
    }

}
