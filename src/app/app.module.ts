import { BrowserModule } from '@angular/platform-browser';
//import { plateformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { SlideMenu } from './slideMenuNavigation/slideMenu';
import { ClickOutsideDirective } from './slideMenuNavigation/clickOutside';
import {DeskComponent} from './desk.component';
import {HomeComponent} from './home.component';
//routing import
import {routing} from './app.routing';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    HomeComponent,
    SlideMenu,
    ClickOutsideDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
