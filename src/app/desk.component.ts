/*
 * Angular 2 decorators and services
 */
import {
  Component,
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
  /*providers : [desktopIssueForm],*/
  selector: 'desk',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  
  templateUrl: 'desk.component.html'
})


export class DeskComponent {
  title = 'My component!';
  isSubmitted: boolean;
  isNewForm : boolean = true;
  


  asset ='A1234';
  desktopissue = null;
  description = 'descritpion';


  constructor(private router: Router) {
    this.desktopissue = new desktopIssueForm(this.asset, 'Clement', 'existing', 'low', 'low', null);
    
  }

  saveEditable() {
    this.desktopissue.asset = this.asset;

  }
  desktopSubmit() {
    this.desktopissue.description = this.description;
    this.descriptionParserandValidator(this.desktopissue);
    this.isSubmitted = true;
    //this.router.navigate(['/deskqs']);
    
  }

  descriptionParserandValidator(desktopIssueForm) {

    if ((desktopIssueForm.description.indexOf("not work")) ||
      (desktopIssueForm.description.indexOf("not switch"))) {

      desktopIssueForm.sevierity = "Medium";
      desktopIssueForm.priority = "High";



    }


  }

}

// Createe DesktopIssueForm
/*export class DektopIssueForm {

  asset: String;
  username: String;
  request: String; // new or existing desktop
  priority: String;
  sevierity: String;
  description: String;


  constructor(inasset: String, inusername: String, inrequest: String, inpriority: String, insevierity: String, indescription: String) {
    this.asset = inasset;
    this.username = inusername;
    this.request = inrequest;
    this.priority = inpriority;
    this.sevierity = insevierity;
    this.description = indescription;
  }
}*/