import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RobotComponent } from './components/robot/robot.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { WikiComponent } from './components/wiki/wiki.component';

const appRoutes: Routes = [
        {
                path: 'home',
                component: HomeComponent
        },
        {
                path: 'robot',
                component: RobotComponent
        },
        {
                path: 'about-us',
                component: AboutComponent
        },
        {
                path: 'programming',
                component: ProgrammingComponent
        },
        {
                path: 'contact',
                component: ContactComponent
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
                NotfoundComponent,
                RobotComponent,
                AboutComponent,
                ContactComponent,
                ProgrammingComponent,
                WikiComponent
        ],
        imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }