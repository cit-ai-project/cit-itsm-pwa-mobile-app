
/*
 * Angular 2 decorators and services
 */
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { desktopIssueForm } from './desktopIssueForm';
import { PostdataService } from './postdata.service';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'deskqs',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'deskqs.component.html'
})


export class DeskQSComponent {

  @Input() desktopissue: desktopIssueForm;
  title = 'My component!';

  description = '';
  isSecondPage: boolean = false;

  constructor(private PostdataService: PostdataService) {
  }

  desktopQSKSubmit() {
    // call node server
    var response = this.PostdataService.getTicketCreated(this.desktopissue).then(response => {

      // console.log(" Response ==>"+ response);
      if (this.desktopissue.longDescReqd === 'yes') {
        this.isSecondPage = true;
      }
    });

  }

  descriptionParserandValidator(desktopIssueForm) {

    if ((desktopIssueForm.description.indexOf("not work")) ||
      (desktopIssueForm.description.indexOf("not switch"))) {

      desktopIssueForm.sevierity = "Medium";
      desktopIssueForm.priority = "High";
    }
  }

  /*enableDisableMessage(){
    
  }*/

}
