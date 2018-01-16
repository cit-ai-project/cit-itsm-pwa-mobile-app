/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { desktopIssueForm } from './desktopIssueForm';



/*
 * App Component
 * Top Level Component
 */
@Component({
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
  isNewForm: boolean = true;
  asset = 'A1234';
  desktopissue = null;
  shortDescription = '';
  longDescReqd = 'yes';
  l
  problem = ["not work", "not switch", "not display", "blink", "blue screen", "unable"];
  problemsyn = ["NWork", "NSwitch", "NDisplay", "Blink", "BScreen", "NWork"];
  entity = ['cpu', 'monitor', 'system', 'keyboard'];
  entityResult: string;
  problemResult: string;


  constructor() {
    this.desktopissue = new desktopIssueForm(this.asset, 'Clement', undefined, undefined, 'low', 'low', undefined, undefined, undefined, undefined, undefined);

  }

  saveEditable() {
    this.desktopissue.asset = this.asset;

  }
  desktopSubmit() {
    this.desktopissue.shortDescription = this.shortDescription;
    this.desktopissue.longDescReqd = this.longDescReqd;
    if (this.longDescReqd == 'no') {
      this.desktopissue.submitted = 'no';
    }
    //this.descriptionParserandValidator(this.desktopissue);
    this.isSubmitted = true;
    this.isNewForm = false;
  }

  descriptionParserandValidator(desktopIssueForm) {

    // To check the entity category
    this.entityResult = contains(this.entity, desktopIssueForm.description)
    if (this.entityResult != 'notavailable') {
      this.desktopissue.entity = this.entityResult;
    }


    // To check the actual problem category
    this.problemResult = contains(this.problem, desktopIssueForm.description)
    if (this.problemResult != 'notavailable') {
      this.desktopissue.problem = this.problemResult;
      entityProblemCorrection(this.problem, this.problemsyn, this.desktopissue);
      sevierityPriortySet(this.desktopissue);

    }
  }

}


function entityProblemCorrection(problem, problemsync, desktopIssue) {
  var indexProblem: number;
  // set desktop actual problem in one word. If "not work" then "NWorking"
  indexProblem = containsIndex(problem, desktopIssue.problem);
  desktopIssue.problem = problemsync[indexProblem];
  // Not display, Blink & Blue screen is part of Monitor hence entity changed to Monitor
  if ((desktopIssue.problem == 'NDisplay') ||
    (desktopIssue.problem == 'Blink') ||
    (desktopIssue.problem == 'BScreen'))
    desktopIssue.entity = 'monitor';
}

// Function to set Sevierity and Priority based on Entity and Problem
function sevierityPriortySet(desktopIssue) {
  if (((desktopIssue.entity == 'monitor') ||
    (desktopIssue.entity == 'cpu')) &&
    ((desktopIssue.problem == 'NDisplay') ||
      (desktopIssue.problem == 'Blink') ||
      (desktopIssue.problem == 'BScreen') ||
      (desktopIssue.problem == 'NSwitch'))) {
    desktopIssue.sevierity = "Medium";
    desktopIssue.priority = "High";
  }
  else if ((desktopIssue.entity == 'keyboard') &&
    (desktopIssue.problem == 'NWorking')) {
    desktopIssue.sevierity = "Medium";
    desktopIssue.priority = "Medium";
  }
}

function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (obj.indexOf(a[i]) != -1) {
      return a[i];
    }
  }
  return 'notavailable';
}

function containsIndex(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (obj.indexOf(a[i]) != -1) {
      return i;
    }
  }
  return -1;
}