import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from  './app.component';
import {DeskComponent} from  './desk.component';
import {DeskQSComponent} from  './deskqs.component';
import {HomeComponent} from  './home.component';
import {SysAppComponent} from  './sysapp.component';

const appRoutes: Routes =[
    { path:'', component: SysAppComponent },
    { path:'home', component: SysAppComponent },
    { path:'desk', component: DeskComponent },
    { path:'deskqs', component: DeskQSComponent },
    { path:'sysapp', component: SysAppComponent }
]

export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);




