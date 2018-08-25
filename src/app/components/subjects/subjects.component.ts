import {Component, OnInit} from '@angular/core';
import {SubjectsService} from '../../subjects.service';
import {Subject} from '../../model/subject';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

    subjects: Subject[];

    constructor(private subjectsService: SubjectsService) {
    }

    ngOnInit() {
        this.subjectsService.getSubjects().subscribe((subjects: Subject[]) => {
            this.subjects = subjects;
        });
    }

}
