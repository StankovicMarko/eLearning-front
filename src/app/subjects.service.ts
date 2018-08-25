import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SubjectsService {

    readonly url = 'http://localhost:8080/api/predmet';

    constructor(private http: HttpClient) {
    }

    getSubjects() {
        return this.http.get(this.url);
    }

}
