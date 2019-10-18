import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { SharedEnvironment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {
    private subject = new Subject<any>();

    constructor(private snackBar: MatSnackBar,private http: HttpClient ){}

    sendMessage(severity: string, summary: string, detail: string) {
      this.subject.next({ severity, summary, detail });
    }

    public snakBar(response, action) {
      this.snackBar.open(response, action, {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

  /**
   * Get User from api
   * @author Vijay Prajapati
   */

  getuserDetails() {
    return this.http.get(SharedEnvironment.API_URL + '/users');

  }
}
