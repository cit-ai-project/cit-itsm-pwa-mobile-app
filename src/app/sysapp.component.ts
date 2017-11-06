/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'sysapp',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './page-styles.css'
  ],
  templateUrl:'sysapp.component.html'
})

export class SysAppComponent  {

    

}