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
                                "name":"Kendall",
                                "bio":"Team Captain",
                                "imgpath":"../../../assets/team/kendall.jpg"
                        },
                        {
                                "name":"Megan",
                                "bio":"Outreach Captain",
                                "imgpath":"../../../assets/team/megan.jpg"
                        },
                        {
                                "name":"Blake",
                                "bio":"Programming Captain",
                                "imgpath":'../../../assets/team/blake.jpg'
                        },
                        {
                                "name":"Clayton",
                                "bio":"Construction Captain",
                                "imgpath":'../../../assets/team/clayton.jpg'
                        },
                        {
                                "name":"Ehan",
                                "bio":"3D Printing Captain",
                                "imgpath":'../../../assets/team/ehan.jpg'
                        },
                        {
                                "name":"Amir",
                                "bio":"3D Printing Co-Captain",
                                "imgpath":'../../../assets/team/amir.jpg'
                        },
                        {
                                "name":"Joshua",
                                "bio":"Programming",
                                "imgpath":"../../../assets/team/josh.jpg"
                        },
                        {
                                "name":"Niema",
                                "bio":"Programming",
                                "imgpath":"../../../assets/team/niema.jpg"
                        },
                        {
                                "name":"Will",
                                "bio":"Construction",
                                "imgpath":"../../../assets/team/will.jpg"
                        },
                        {
                                "name":"Justin",
                                "bio":"3D Printing",
                                "imgpath":"../../../assets/team/justin.jpg"
                        },
                        {
                                "name":"Jude",
                                "bio":"Programming",
                                "imgpath":"../../../assets/team/jude.jpg"
                        },
                        {
                                "name":"Julian",
                                "bio":"Construction",
                                "imgpath":"../../../assets/team/julian.jpg"
                        },
                        {
                                "name":"Parker",
                                "bio":"Outreach",
                                "imgpath":"../../../assets/team/parker.jpg"
                        },
                        {
                                "name":"Ethan",
                                "bio":"Construction",
                                "imgpath":"../../../assets/team/ethan.jpg"
                        },
                        {
                                "name":"Alex",
                                "bio":"Programming",
                                "imgpath":"../../../assets/team/alex.jpg"
                        },
                        {
                                "name":"Kyle",
                                "bio":"Construction",
                                "imgpath":"../../../assets/team/kyle.jpg"
                        },
                        {
                                "name":"Meade Summers",
                                "bio":"3D Printing",
                                "imgpath":"../../../assets/team/meade.jpg"
                        },
                        {
                                "name":"Matt",
                                "bio":"Construction",
                                "imgpath":"../../../assets/team/matt.jpg"
                        },
                        {
                                "name":"placeholder",
                                "bio":"don't remove",
                                "imgpath":'just dont'
                        }
                ]
        };
        
        constructor() { }

        ngOnInit() {
                let carry = 0;
                      
                for (var person = 0; person < this.imgConfig.people.length; person++) {
                        var rowContainer = document.createElement("DIV");
                        var style = document.createAttribute("style");
                        style.value = "display: flex; justify-content: center; align-items: center; flex-direction: row";
                        rowContainer.setAttributeNode(style);
                        
                        for (var i = 0; i <= 2; i++) {
                                rowContainer.appendChild(this.generateImageLine(person + i));
                                carry = (person + i);
                        }
                        person = carry;
                        document.getElementById("master").appendChild(rowContainer);
                }
        }
        
        generateImageLine(i) {
                
                var container = document.createElement("DIV");  
                var margin = document.createAttribute("style");
                margin.value = "margin-right: 25px; margin-bottom: 25px; display: flex; justify-content: center; align-items: center; flex-direction: column; color:white; font-size: 18px; font-family: 'Open Sans', sans-serif; width: 250px; height: 350px;";
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
                
                return container;
        }
}