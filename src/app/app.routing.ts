import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from  './app.component';
import {DeskComponent} from  './desk.component';

const appRoutes: Routes =[
    { path:'', component: AppComponent },
    { path:'desk', component: DeskComponent }
]

export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);




