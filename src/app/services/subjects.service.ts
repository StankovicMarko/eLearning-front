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
}
