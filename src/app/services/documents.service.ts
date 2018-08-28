import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DocumentsService {


  readonly rootUrl = 'http://localhost:8080/api/dokument';

  constructor(private http: HttpClient) { }



  getDocuments() {
    return this.http.get(this.rootUrl);
  }

  downloadDocument(document) {
      return this.http.get(this.rootUrl + '/download/' + document.id, {responseType: "blob"});
  }


  deleteDocument(document) {
      return this.http.delete(this.rootUrl + '/' + document.id);
  }


  postFile(fileToUpload: File){
     const endpoint = this.rootUrl+'/upload';
     const formData: FormData = new FormData();
     formData.append('file', fileToUpload, fileToUpload.name);
     return this.http
       .post(endpoint, formData);
 }
}
