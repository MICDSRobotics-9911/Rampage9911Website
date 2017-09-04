import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/ContactService/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

        constructor(private contactService : ContactService) { }

        ngOnInit() {
        }
        
        submit(event, subject : string, body : string) {
                    this.contactService.sendConact('kework@micds.org', subject, body).subscribe(
                              res => {
                                        if (res.json().error != "null") {
                                                  alert(res.json().error);
                                        }
                                        else {
                                                  alert(res.json().message);
                                        }
                              }
                    );
          }
}
