import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { SharedMessageService } from '../../../services/shared-message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  msgs: Message[] = [];
  message: any = {};
  subscription: Subscription;


  constructor(private messageService : SharedMessageService) {

   }

  ngOnInit() {
    this.getMessage();
  }
  getMessage(){
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      this.showMsg(message.severity,message.summary,message.detail);
     });
  }


  showMsg(severity,summary,detail){
    switch(severity) {
      case 'success':
        this.msgs = [];
        this.msgs.push({severity, summary, detail});
        break;
      case 'info':
        this.msgs = [];
        this.msgs.push({severity, summary, detail});
        break;
      case 'warn':
        this.msgs = [];
        this.msgs.push({severity, summary, detail});
        break;
      case 'error':
        this.msgs = [];
        this.msgs.push({severity, summary, detail});
        break;
      default:
          this.msgs = [];
          this.msgs.push({severity, summary, detail});
    }
    }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.msgs = [];
    this.subscription.unsubscribe();
}
}
