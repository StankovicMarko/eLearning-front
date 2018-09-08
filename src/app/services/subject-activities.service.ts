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

    addSubjectActivity(subjectActivity: SubjectActivity) {
        console.log(subjectActivity);
        const data = {
            datumAktivnosti: subjectActivity.datumAktivnosti,
            maxBrojBodova: subjectActivity.maxBrojBodova,
            nastavnaAktivnostTipId: subjectActivity.nastavnaAktivnostTipDto.id,
            predmetId: subjectActivity.predmet.id
        };
        return this.http.post(this.rootUrl, data);
    }

    updateSubjectActivity(subjectActivity: SubjectActivity) {
        const data = {
            datumAktivnosti: subjectActivity.datumAktivnosti,
            maxBrojBodova: subjectActivity.maxBrojBodova,
            nastavnaAktivnostTipId: subjectActivity.nastavnaAktivnostTipDto.id,
            predmetId: subjectActivity.predmet.id
        };
        return this.http.put(this.rootUrl + '/' + subjectActivity.id, data);
    }

    deleteSubjectActivity(id) {
        return this.http.delete(this.rootUrl + '/' + id);
    }
}
