import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {
    private subject = new Subject<any>();

    sendMessage(severity: string, summary: string, detail: string) {
      console.log(severity, summary, detail);
      this.subject.next({ severity, summary, detail });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
