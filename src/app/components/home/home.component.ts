import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
        shown = "hidden";

        constructor() { }

        ngOnInit() {
                /*setTimeout(e => {
                        this.shown = "visible"
                }, 500);*/
                
                this.shown = "visible";
        }
}