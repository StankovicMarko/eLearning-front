import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SubjectActivity} from '../model/subject-activity';

@Injectable()
export class SubjectActivitiesService {

    readonly rootUrl = 'http://localhost:8080/api/nastavna_aktivnost';


    constructor(private http: HttpClient) {
    }

    getSubjectActivities() {
        return this.http.get(this.rootUrl);
    }

    updateSubjectActivity(subjectActivity: SubjectActivity) {
        console.log(subjectActivity);
        const data = {
            datumAktivnosti: subjectActivity.datumAktivnosti,
            maxBrojBodova: subjectActivity.maxBrojBodova,
            nastavnaAktivnostTipId: subjectActivity.nastavnaAktivnostTipDto.id,
            predmetId: subjectActivity.predmetId
        };
        return this.http.put(this.rootUrl + '/' + subjectActivity.id, data);
    }

    getSubjectActivityTypes() {
        return [
            {
                'id': 30,
                'naziv': 'ispit'
            },
            {
                'id': 31,
                'naziv': 'kolokvijum'
            }
        ];
    }
}
