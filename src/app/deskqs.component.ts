
/*
 * Angular 2 decorators and services
 */
import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {desktopIssueForm} from './desktopIssueForm';


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
    @Input() desktopissue : desktopIssueForm;
  title = 'My component!';

   description = 'descritpion';


  constructor() {
       
  }

 desktopQSSubmit() {
   console.log("desktopQSSubmit"+"destop issue");
   this.desktopissue;
   this.desktopissue;

  }

  descriptionParserandValidator(desktopIssueForm) {

    if ((desktopIssueForm.description.indexOf("not work")) ||
      (desktopIssueForm.description.indexOf("not switch"))) {

      desktopIssueForm.sevierity = "Medium";
      desktopIssueForm.priority = "High";
    }
  }

}
