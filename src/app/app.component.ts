/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ContentChild,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  //template  :`<router-outlet></router-outlet>` ,
  templateUrl: 'app.component.html',
  //template : `<html><body> His this is app comp </body></html>`,
})
export class AppComponent implements OnInit {

  /*@ContentChild("cuppa-slidemenu")
  private sMenu : SlideMenu;*/

  private menuItemsArray: any[] = [

    {
      "title": " Hardware Request /  Issues ", "link": "#",
      "subItems": [
        { "title": "Desktop Issue", "link": "#" },
        { "title": "Laptop Issue", "link": "#" },
        { "title": "Printer Issue", "link": "#" },
      ]
    },
    {
      "title": "SoftWare / Application Request", "link": "#",
      "subItems": [
        { "title": "New Software Installation", "link": "#" },
        { "title": "Software Issue Request", "link": "#" },
        { "title": "Report Security Problem", "link": "#" },
      ]
    },
    {
      "title": "Communication / Collaboration Request", "link": "#",
      "subItems": [
        { "title": "Lotus Notes Issue", "link": "#" },
        { "title": "Share Point Issue", "link": "#" },
      ]
    },

    {
      "title": "File Share and Data Request", "link": "#",
      "subItems": [
        { "title": "Request access to Filestore", "link": "#" },
        { "title": "FileStore Unlock Request", "link": "#" },
        { "title": "Restore Deleted File", "link": "#" },
      ]
    },
    {
      "title": "Network & Server Request", "link": "#",
      "subItems": [
        { "title": "Network Access", "link": "#" },
        { "title": "Server Issue", "link": "#" },
      ]
    },
  ];

  constructor() { }

  public onMenuClose() {
    //this.sMenu.toggleOverlay();
    console.log("menu closed");
  }
  public onMenuOpen() {
    //this.sMenu.menuToggle();
    console.log("menu Opened");
  }
  private onItemSelect(item: any) {
    console.log(item);
  }
  public ngOnInit() {

  }
  private showdemomsg = false;
  private showMsg() {
    this.showdemomsg = true;
  }
  private hideMsg() {
    this.showdemomsg = false;
  }

}
