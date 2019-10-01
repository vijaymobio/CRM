import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../services/storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logOut();
    }
}
