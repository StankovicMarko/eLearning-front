import {Component, OnInit} from '@angular/core';
import {SubjectsService} from '../../services/subjects.service';
import {Subject} from '../../model/subject';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

    subjects: Subject[];
    students: Student[];
    selectedSubject: Subject;
    selectedStudent: Student;

    addSubjectForm = new FormGroup({
        naziv: new FormControl('', Validators.required),
        bodoviESPB: new FormControl('', Validators.required),
        nastavnikId: new FormControl('', Validators.required),
    });

    updateSubjectForm = new FormGroup({
        id: new FormControl(''),
        naziv: new FormControl(''),
        bodoviESPB: new FormControl(''),
        nastavnikId: new FormControl(''),
    });

    constructor(private subjectsService: SubjectsService) {
    }

    ngOnInit() {
        this.subjectsService.getSubjects().subscribe((subjects: Subject[]) => {
            this.subjects = subjects;
        });
    }

    getSubjects() {
        this.subjectsService.getSubjects().subscribe(
            (data: Subject[]) => {
                this.subjects = data;
            },
            err => console.error(err),
            () => console.log('done loading admins')
        );
    }

    Selected(subject: any) {
        this.selectedSubject = subject;
        this.updateSubjectForm.patchValue({
            id: subject.id,
            naziv: subject.naziv,
            bodoviESPB: subject.bodoviESPB,
            nastavnikId: subject.nastavnikId
        });
        this.getStudentsOnSubject();
    }

    onSubmit() {
        const subject = Object.assign({}, this.updateSubjectForm.value);
        this.subjectsService.updateSubject(subject).subscribe((data: Subject) => {
                this.getSubjects();
            },
            (err: any) => {
                console.log(err);
            });
        document.getElementById('closeModal').click();
    }

    addUser() {
        const subject = Object.assign({}, this.addSubjectForm.value);
        this.subjectsService.addSubject(subject).subscribe((data: Subject) => {
                this.getSubjects();
            },
            (err: any) => {
                console.log(err);
            });
        document.getElementById('closeModalAdd').click();
    }

    deleteSubject() {
        this.subjectsService.deleteSubject(this.selectedSubject.id).subscribe((data: any) => {
                this.getSubjects();
            },
            (err: any) => {
                console.log(err);
            });
        document.getElementById('closeModal').click();
    }

    getStudentsOnSubject() {
        this.subjectsService.getStudentsOnSubject(this.selectedSubject.id).subscribe((data: Student[]) => {
            this.students = data;
        });
    }

    deleteStudentFromSubject(studentId) {
        this.subjectsService.removeStudentFromSubject(this.selectedSubject.id, studentId).subscribe((data: any) => {
            this.getStudentsOnSubject();
        });
    }

}
