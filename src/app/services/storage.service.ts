import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  CanActivate } from '@angular/router';
import { SharedEnvironment } from 'src/environments/environment';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements  CanActivate {
  cookieStorage: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

/**
 * @description Set session User
 * @param email
 * @param password
 * @author Vijay Prajapati
 */

  authenticate(email, password) {
    sessionStorage.setItem('email', email);
    const authString = 'Basic ' + btoa(email + ':' + password);
    sessionStorage.setItem('basicauth', authString);
  }

 /**
  * @description Check user login or not
  * @author Vijay Prajapati
  */
  canActivate() {
    const user = sessionStorage.getItem('email');
    if ( user === null) {
        window.location.href = SharedEnvironment.localUrl;
        return false;
      } else {
        return true;
      }
  }


/**
 * @description Logout user
 * @author Vijay Prajapati
 */
  logOut() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('basicauth');
    // this.router.navigate(['']);
    window.location.href = SharedEnvironment.localUrl;
  }
}
