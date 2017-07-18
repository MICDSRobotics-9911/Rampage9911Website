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
                                "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque sagittis est nec vehicula. Integer porttitor vestibulum orci, vel fermentum ligula luctus non. Proin a suscipit nisl. Pellentesque malesuada nec ipsum vel consectetur. Donec a gravida turpis. Fusce sagittis molestie mauris, ut porta turpis imperdiet sit amet. Curabitur arcu ligula, scelerisque sit amet facilisis id, vehicula sed turpis. Sed faucibus odio a convallis porttitor. Curabitur ut odio consectetur ligula vulputate facilisis. Praesent volutpat pellentesque purus at lobortis. Suspendisse quis enim a libero condimentum consequat. Donec consequat magna nec tellus venenatis sollicitudin. Proin dui justo, mollis sed sodales eget, laoreet sed nisl. Curabitur vehicula est ac eros condimentum pellentesque.",
                                "imgpath":"../../../assets/team/kendall.jpg"
                        },
                        {
                                "name":"Megan",
                                "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque sagittis est nec vehicula. Integer porttitor vestibulum orci, vel fermentum ligula luctus non. Proin a suscipit nisl. Pellentesque malesuada nec ipsum vel consectetur. Donec a gravida turpis. Fusce sagittis molestie mauris, ut porta turpis imperdiet sit amet. Curabitur arcu ligula, scelerisque sit amet facilisis id, vehicula sed turpis. Sed faucibus odio a convallis porttitor. Curabitur ut odio consectetur ligula vulputate facilisis. Praesent volutpat pellentesque purus at lobortis. Suspendisse quis enim a libero condimentum consequat. Donec consequat magna nec tellus venenatis sollicitudin. Proin dui justo, mollis sed sodales eget, laoreet sed nisl. Curabitur vehicula est ac eros condimentum pellentesque.",
                                "imgpath":"../../../assets/team/megan.jpg"
                        },
                        {
                                "name":"Blake",
                                "bio":"he also a G",
                                "imgpath":'../../../assets/team/blake.jpg'
                        },
                        {
                                "name":"Josh",
                                "bio":"he also a G",
                                "imgpath":'../../../assets/team/josh.jpg'
                        },
                        {
                                "name":"Josh",
                                "bio":"he also a G",
                                "imgpath":'../../../assets/team/josh.jpg'
                        },
                        {
                                "name":"Josh",
                                "bio":"he also a G",
                                "imgpath":'../../../assets/team/josh.jpg'
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
                margin.value = "margin-right: 25px; margin-bottom: 25px; display: flex; justify-content: center; align-items: center; flex-direction: column; color:white; font-family: 'Open Sans', sans-serif; width: 350px;";
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