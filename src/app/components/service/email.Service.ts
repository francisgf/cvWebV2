import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Email } from '../model/emailModel'
import { Observable } from 'rxjs';

//import { triggerAsyncId } from 'async_hooks';

@Injectable()
export class EmailService {

    sendEmailURL = "http://localhost:8080/email/"

    constructor(private httpClient: HttpClient) { }

    sendEmail(email: Email): Observable<Email> {
        return this.httpClient.post<any>(this.sendEmailURL + 'enviar', email);

    }
}