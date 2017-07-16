import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const appRoutes: Routes = [
        {
                path: 'home',
                component: HomeComponent
        },
        {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
        },
        {
                path: '**',
                component: NotfoundComponent
        }
]

@NgModule({
        declarations: [
                AppComponent,
                HomeComponent,
                NotfoundComponent
        ],
        imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }