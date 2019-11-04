import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../services/storage.service';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router,private cookieService: CookieService ,private auth: AuthenticationService) { }

  ngOnInit() {
  }

   /**
    * Logout methods
    * @author Vijay Prajapati
    */
  logout() {
    this.auth.logOut();
    this.cookieService.delete('token');
    }

    /**
     * Reset Password
     * @author Vijay Prajapati
     */
    resetPassword() {
      this.router.navigateByUrl('/reset')

    }
}
