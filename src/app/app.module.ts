import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
        {
                path: 'home',
                component: HomeComponent
        }
]

@NgModule({
        declarations: [
                AppComponent,
                HomeComponent
        ],
        imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }