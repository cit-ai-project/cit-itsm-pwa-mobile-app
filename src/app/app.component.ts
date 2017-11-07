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
  templateUrl:'app.component.html',
  //template : `<html><body> His this is app comp </body></html>`,
})
export class AppComponent implements OnInit {

  /*@ContentChild("cuppa-slidemenu")
  private sMenu : SlideMenu;*/

    private menuItemsArray: any[] = [
                          /*  {"title":"Home","link":"#"},*/
                            {"title":" Hardware Request /  Issues ","link":"#",
                              "subItems":[
                                            {"title":"Desktop Issue","link":"#"},
                                            {"title":"Laptop Issue","link":"#"},
                                            {"title":"Printer Issue","link":"#"},
                                           ]
                            },
                            {"title":"SoftWare / Application Request","link":"#",
                                "subItems":[
                                            {"title":"New Software Installation","link":"#"},
                                            {"title":"Software Issue Request","link":"#"},
                                            {"title":"Report Security Problem","link":"#"},
                                           ]
                            },
                            {"title":"Communication / Collaboration Request","link":"#",
                                "subItems":[
                                            {"title":"Lotus Notes Issue","link":"#"},
                                            {"title":"Share Point Issue","link":"#"},
                                           ]
                            },
                            
                            {"title":"File Share and Data Request","link":"#",
                                "subItems":[
                                            {"title":"Request access to Filestore","link":"#"},
                                            {"title":"FileStore Unlock Request","link":"#"},
                                            {"title":"Restore Deleted File","link":"#"},
                                           ]
                            },
                            {"title":"Network & Server Request","link":"#",
                                "subItems":[
                                            {"title":"Network Access","link":"#"},
                                            {"title":"Server Issue","link":"#"},
                                           ]
                            },
                        ];

  constructor() {}

  public onMenuClose(){
    //this.sMenu.toggleOverlay();
    console.log("menu closed");
  }
  public onMenuOpen(){
    //this.sMenu.menuToggle();
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    console.log(item);
  }
    public ngOnInit() {
    
  } 
  private showdemomsg = false;
  private showMsg(){
    this.showdemomsg = true;
  }
  private hideMsg(){
    this.showdemomsg = false;
  }
 /** npminstallScript: string = 'npm install cuppa-ng2-slidemenu';
  installScript: string = "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';";
  moduleScript: string =  "import { NgModule } from '@angular/core';\n"+
        "import { BrowserModule } from '@angular/platform-browser';\n"+
        "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';\n"+
        "import { AppComponent } from './app.component';\n"+
        "\n"+
        "@NgModule({\n"+
        "   bootstrap: [ AppComponent ],\n"+
        "   declarations: [AppComponent],\n"+
        "   imports: [SlideMenuModule] // Import SlideMenu module variable here \n"+
        "})\n"+
        "export class AppModule {\n"+
        "}";
  htmlTag: string = '<cuppa-slidemenu [menulist]="menuItemsArray" (open)="onMenuOpen()" (close)="onMenuClose()" (onItemSelect)="onItemSelect($event)"></cuppa-slidemenu>';
  jsScript:string =                 'private menuItemsArray: any[] = [ \n'+
                                    '       {"title":"Software / Application Request","link":"#"\n'+
                                    '       "subItems":[\n'+
                                    '                   {"title":"Desktop Issue","link":"http://www.google.co.in"},\n'+
                                    '                   {"title":"Priter Issue","link":"#"},\n'+
                                    '                  ]\n'+
                                    '       },\n'+
                                    '       {"title":"Mobile Bill","link":"#"},\n'+
                                    '       {"title":"Home and Kitchen","link":"#",\n'+
                                    '       "subItems":[\n'+
                                    '                   {"title":"Furniture","link":"#"},\n'+
                                    '                   {"title":"Cookware","link":"#"},\n'+
                                    '                  ]\n'+
                                    '       },\n'+
                                    '       {"title":"Car and Bike Accessories","link":"#",\n'+
                                    '        "subItems":[\n'+
                                    '                     {"title":"Tyres and Alloys","link":"#"},\n'+
                                    '                     {"title":"Comfort and Safety","link":"#"},\n'+
                                    '                    ]\n'+
                                    '       },\n'+
                                    ' ];\n'+
                                    'public onMenuClose(){\n'+
                                    '    console.log("menu closed");\n'+
                                    '}\n'+
                                    'public onMenuOpen(){\n'+
                                    '    console.log("menu Opened");\n'+
                                    '}\n'+
                                    'private onItemSelect(item:any){\n'+
                                    '    console.log(item);\n'+
                                    '};' **/
}
