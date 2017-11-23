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
  problem =["not work","not switch","not display","blinking","not work"];
  entity = ['cpu','laptop','system','printer'];
  entityResult : string;
  problemResult :string;


  constructor(private router: Router) {
    this.desktopissue = new desktopIssueForm(this.asset, 'Clement', undefined, undefined, 'low', 'low', undefined,undefined,undefined);
    
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

    // To check the entity category
     this.entityResult = contains(this.entity, desktopIssueForm.description)
    if (this.entityResult !='notavailable') {
       this.desktopissue.entity =this.entityResult;
    }


    // To check the actual problem category
     this.problemResult = contains(this.problem, desktopIssueForm.description)
     if(this.problemResult !='notavailable') { 
      this.desktopissue.problem =this.problemResult;
      desktopIssueForm.sevierity = "Medium";
      desktopIssueForm.priority = "High";
    }
  }

}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (obj.indexOf(a[i])) {
            return a[i];
        }
    }
    return 'notavailable';
}