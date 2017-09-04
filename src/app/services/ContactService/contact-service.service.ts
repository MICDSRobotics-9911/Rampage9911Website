import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContactService {

          constructor( private http : Http) {}

          formatURL(url : string, to : string, subject : string, html : string) : string {
                    return url + "?to=" + to + "&subject=" + subject + "&html=" + html;
          }

          sendConact(to : string, subject : string, html : string) {
                    let url : string = "https://api.amtstl.xyz/email/send";

                    return this.http.get(this.formatURL(url, to, subject, html));
          }
}