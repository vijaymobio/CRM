import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../services/storage.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private cookieService: CookieService ,private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logOut();
    this.cookieService.delete('token');
    }
}
