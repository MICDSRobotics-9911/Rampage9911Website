import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
        imgConfig = {
                "people": [
                        {
                                "name":"Alex M",
                                "bio":"Sup G?",
                                "imgpath":"../../../assets/team/alex.jpg"
                        },
                        {
                                "name":"Blake",
                                "bio":"none",
                                "imgpath":"../../../assets/team/blake.jpg"
                        }
                ]
        };
        
        constructor() { }

        ngOnInit() {
                for (var i = 0; i < this.imgConfig.people.length; i++) {
                        this.generateImageLine(i);
                }
        }
        
        generateImageLine(i) {
                var container = document.createElement("DIV");  
                var margin = document.createAttribute("style");
                margin.value = "margin-right: 25px; margin-bottom: 25px; display: flex; justify-content: center; align-items: center; flex-direction: column; color:white; font-family: 'Open Sans', sans-serif";
                container.setAttributeNode(margin);
                
                // create an image
                var profile = document.createElement("IMG");
                var src = document.createAttribute("src");
                src.value = this.imgConfig.people[i].imgpath;
                
                var height = document.createAttribute("height");
                height.value = "200px";
                
                var width = document.createAttribute("width");
                width.value = "160px";
                
                var style = document.createAttribute("style");
                style.value = "margin-bottom: 15px;";
                
                profile.setAttributeNode(height);
                profile.setAttributeNode(width);
                profile.setAttributeNode(src);
                profile.setAttributeNode(style);
                // end create an image
                
                var name = document.createTextNode(this.imgConfig.people[i].name + ": " + this.imgConfig.people[i].bio);
                
                container.appendChild(profile);
                container.appendChild(name);
                
                document.getElementById("master").appendChild(container);
        }
}