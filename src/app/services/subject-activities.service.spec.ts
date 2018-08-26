import {inject, TestBed} from '@angular/core/testing';

import {SubjectActivitiesService} from './subject-activities.service';

describe('SubjectActivitiesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SubjectActivitiesService]
        });
    });

    it('should be created', inject([SubjectActivitiesService], (service: SubjectActivitiesService) => {
        expect(service).toBeTruthy();
    }));
});
