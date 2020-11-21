import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {

    url = 'http://localhost:3000/'
    constructor(public http: HttpClient) {

    }


    sendEmail(data) {
        return this.http.post(this.url + 'sendemail', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        });
    }






}