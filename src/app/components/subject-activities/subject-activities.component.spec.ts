import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubjectActivitiesComponent} from './subject-activities.component';

describe('SubjectActivitiesComponent', () => {
    let component: SubjectActivitiesComponent;
    let fixture: ComponentFixture<SubjectActivitiesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubjectActivitiesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectActivitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
