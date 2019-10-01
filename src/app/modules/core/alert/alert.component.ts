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
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      console.log(message);

      this.showMsg(message.severity,message.summary,message.detail);
     });
   }

  ngOnInit() {
    // this.showMsg('success','dsdsdsf','sfsfsf');
  }


  showMsg(severity,summary,detail){
    switch(severity) {
      case 'success':
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: summary, detail: detail});
        break;
      case 'info':
        this.msgs = [];
        this.msgs.push({severity:'info',  summary: summary, detail: detail});
        break;
      case 'warn':
        this.msgs = [];
        this.msgs.push({severity:'warn',  summary: summary, detail: detail});
        break;
      case 'error':
        this.msgs = [];
        this.msgs.push({severity:'error',  summary: summary, detail: detail});
        break;
      default:
          this.msgs = [];
          this.msgs.push({severity:'info', summary: summary, detail: detail});
    }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
