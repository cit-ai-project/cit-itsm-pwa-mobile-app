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
  templateUrl:'desk.component.html'
})

export class DeskComponent  {
title = 'My component!';

  asset = 'A123345';
  user_name='Clement Rajesh';
  username ="Clement";

    

}