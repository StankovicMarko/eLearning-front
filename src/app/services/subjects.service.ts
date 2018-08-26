import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../model/subject';

@Injectable()
export class SubjectsService {

    readonly rootUrl = 'http://localhost:8080/api/predmet';

    constructor(private http: HttpClient) {
    }

    getSubjects() {
        return this.http.get(this.rootUrl);
    }

    addSubject(subject: Subject) {
        return this.http.post(this.rootUrl, subject);
    }

    updateSubject(subject) {
        return this.http.put(this.rootUrl + '/' + subject.id, subject);
    }

    deleteSubject(id) {
        return this.http.delete(this.rootUrl + '/' + id);
    }

    getStudentsOnSubject(id) {
        return this.http.get(this.rootUrl + '/' + id + '/ucenici');
    }

    addStudentToSubject(predmetId, ucenikId) {
        const data = {};
        return this.http.put(this.rootUrl + '/' + predmetId + '/ucenik/' + ucenikId, data);
    }

    removeStudentFromSubject(predmetId, ucenikId) {
        return this.http.delete(this.rootUrl + '/' + predmetId + '/ucenik/' + ucenikId);
    }
}
