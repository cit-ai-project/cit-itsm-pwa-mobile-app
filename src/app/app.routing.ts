import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from  './app.component';
import {DeskComponent} from  './desk.component';
import {HomeComponent} from  './home.component';
import {SysAppComponent} from  './sysapp.component';

const appRoutes: Routes =[
    { path:'', component: HomeComponent },
    { path:'home', component: HomeComponent },
    { path:'desk', component: DeskComponent },
    { path:'sysapp', component: SysAppComponent }
]

export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);




