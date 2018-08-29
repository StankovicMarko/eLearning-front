import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../model/subject';

@Injectable()
export class SubjectsService {

    readonly rootUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {
    }

    getSubjects() {
        return this.http.get(this.rootUrl + '/predmet');
    }

    addSubject(subject: Subject) {
        const data = {
            'naziv': subject.naziv,
            'bodoviESPB': subject.bodoviESPB,
            'nastavnikId': subject.nastavnik.id
        };
        return this.http.post(this.rootUrl + '/predmet', data);
    }

    updateSubject(subject) {
        const data = {
            'naziv': subject.naziv,
            'bodoviESPB': subject.bodoviESPB,
            'nastavnikId': subject.nastavnik.id
        };
        return this.http.put(this.rootUrl + '/predmet/' + subject.id, data);
    }

    deleteSubject(id) {
        return this.http.delete(this.rootUrl + '/predmet/' + id);
    }

    getStudentsOnSubject(id) {
        return this.http.get(this.rootUrl + '/predmet/' + id + '/ucenici');
    }

    addStudentToSubject(predmetId, ucenikId) {
        const data = {};
        return this.http.put(this.rootUrl + '/predmet/' + predmetId + '/ucenik/' + ucenikId, data);
    }

    removeStudentFromSubject(predmetId, ucenikId) {
        return this.http.delete(this.rootUrl + '/predmet/' + predmetId + '/ucenik/' + ucenikId);
    }


    ///subject activity types


    getSubjectActivityTypes() {
        return this.http.get(this.rootUrl+'/nastavna_aktivnost_tip');
    }

    addSubjectActivityType(type) {
        return this.http.post(this.rootUrl+'/nastavna_aktivnost_tip', type);
    }

    updateSubjectActivityType(type) {
        return this.http.put(this.rootUrl + '/nastavna_aktivnost_tip/' + type.id, type);
    }

    deleteType(type) {
        return this.http.delete(this.rootUrl + '/nastavna_aktivnost_tip/' + type.id);
    }




}
