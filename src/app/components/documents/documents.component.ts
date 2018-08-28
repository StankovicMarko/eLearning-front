import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DocumentsService } from '../../services/documents.service';
import {AuthService} from '../../auth.service';
import 'rxjs/Rx' ;
import { Document } from '../../model/document';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {


  public documents;
  public selectedDocument;
  currentUserType: string;
  fileToUpload: File = null;


  constructor(private documentsService: DocumentsService,  private authService: AuthService) { }

  ngOnInit() {

    this.getDocuments();
    this.currentUserType = this.authService.getCurrentUserType();
  }


  getDocuments() {
    this.documentsService.getDocuments().subscribe(
      data => { this.documents = data },
      err => console.error(err),
      () => console.log('done loading documents')
    );
  }


  Selected(document: any) {
    this.selectedDocument = document;
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  addDocument() {
    this.documentsService.postFile(this.fileToUpload).subscribe(data => {
      this.getDocuments();
      document.getElementById('closeModalAdd').click();

      }, error => {
        console.log(error);
      });
    }



  downloadFile(data: any){
  var blob = new Blob([data], { type: 'application/octet-stream' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
}

  downloadDocument(document) {
    this.documentsService.downloadDocument(document).subscribe(data => this.downloadFile(data)),
    error => console.log("Error downloading the file."),
    () => console.info("OK");

  }


  }
