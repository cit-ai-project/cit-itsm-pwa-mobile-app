/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
/*import {DropdownModule} from "ng2-dropdown";
import {DROPDOWN_DIRECTIVES} from 'ng2-bs-dropdown';*/

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'desk',
  /* providers: [DROPDOWN_DIRECTIVES],*/
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'desk.component.html'
})


export class DeskComponent {
  title = 'My component!';

  asset ='A1234';
  desktopissue = null;


  constructor() {
    this.desktopissue = new DektopIssueForm('A1234', 'Clement', 'existing', 'low', 'low', null);
    this.asset = this.desktopissue.asset;
  }
  /*
   desktop = { 
    asset: String,
    username:String,
    request: String, // new or existing desktop
    priority : String,
    sevierity : String,
    description : String }
  
    desktopissue = null;
  
    asset = "'A123345";
    username ="Clement";
    request ='existing';
    priority ="Low";
    sevierity="Low";
    description="";
  
  
      destopIssue(id){
       var dektopIssue = new Object();
       desktopIssue.id=101; 
       
  
  
  
  } */

  saveEditable() {
    this.desktopissue.asset = 'A123';

  }
  desktopSubmit() {
    this.desktopissue.description = 'description';
    this.descriptionParserandValidator(this.desktopissue);
    /*
            // Before submit print all the values
            console.log("asset >>"+this.asset);
            console.log("user_name >>"+this.user_name);
            console.log("username >>"+this.username);
            console.log("request >>"+this.request);
            console.log("priority >>"+this.priority);
            console.log("sevierity >>"+this.sevierity);*/




  }

  descriptionParserandValidator(desktopIssueForm) {

    if ((desktopIssueForm.description.indexOf("not working")) ||
      (desktopIssueForm.description.indexOf("not switch"))) {

      desktopIssueForm.sevierity = "High";
      desktopIssueForm.priority = "High";



    }


  }

}

// Createe DesktopIssueForm
class DektopIssueForm {

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
}