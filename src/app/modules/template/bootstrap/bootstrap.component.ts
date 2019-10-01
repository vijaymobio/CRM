import { Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { SharedMessageService } from '../../../services/shared-message.service';


@Component({
  selector: 'app-root',
  templateUrl: './bootstrap.html',
  styleUrls: ['./bootstrap.css']
})

export class BootstrapComponent implements OnInit {


  userActive = false;
  title = 'CRM';

  constructor( private router: Router, private messageService: SharedMessageService) {}

  ngOnInit() {
    this.getUserActive();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(){
    this.sendMessage('success','Vijay Prajapati','succesfully login');
}
  getUserActive() {
    const user = sessionStorage.getItem('email');
    if (user === null) {
      this.userActive = false;
      this.router.navigate(['']);
    } else {
      this.userActive = true;
      this.router.navigate(['/dashboard']);
    }
  }

  sendMessage(severity: string , summary: string, detail: string): void {
    console.log('yes called');
    this.messageService.sendMessage(severity,summary,detail);
}

clearMessage(): void {
this.messageService.clearMessage();
}
}
