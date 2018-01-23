import { BrowserModule } from '@angular/platform-browser';
//import { plateformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {InlineEditorModule} from 'ng2-inline-editor';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
//import { SlideMenu } from './slideMenu';
import { ClickOutsideDirective } from './clickOutside';
import {DeskComponent} from './desk.component';
import {DeskQSComponent} from './deskqs.component';
import {HomeComponent} from './home.component';
import {SysAppComponent} from './sysapp.component';
//routing import
import {routing} from './app.routing';

import { PostdataService }  from './postdata.service';
import { DesksdComponent } from './desksd/desksd.component';
//import {desktopIssueForm} from './desktopIssueForm';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    DeskQSComponent,
    HomeComponent,
    SysAppComponent,
   // SlideMenu,
    ClickOutsideDirective,
    DesksdComponent,
    //desktopIssueForm
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InlineEditorModule
  ],
  providers : [PostdataService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
