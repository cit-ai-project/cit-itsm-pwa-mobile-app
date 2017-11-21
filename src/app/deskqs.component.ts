
/*
 * Angular 2 decorators and services
 */
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
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
  inputs :['desktopissue'],
  templateUrl: 'deskqs.component.html'
})


export class DeskQSComponent {
    @Input() desktopissue : desktopIssueForm;
  title = 'My component!';

  asset ='A1234';
 // desktopissue = null;
  description = 'descritpion';


  constructor(private router: Router) {
    //this.desktopissue = new DektopIssueForm(this.asset, 'Clement', 'existing', 'low', 'low', null);
    
  }

  

  

 /* saveEditable() {
    this.desktopissue.asset = this.asset;

  }*/
  desktopQSSubmit() {
    //this.desktopissue.description = this.description;
    //this.descriptionParserandValidator(this.desktopissue);

   // this.router.navigate(['/desktopqs']);
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
