import { Injectable } from '@angular/core';
import { SharedEnvironment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  CanActivate } from '@angular/router';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class  AuthService  implements  CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  /**
   * User Login Serivce
   *
   * @param UserValue
   * @author vijay Prajapati
   */
  login(value) {
    return this.http.post(SharedEnvironment.loginApi, value);
  }


  /**
   * User Register method
   *
   * @param userDetail
   * @author Vijay Prajapati
   */
  registerUser(userDetail) {
    return this.http.post(SharedEnvironment.regApi, userDetail);
  }

 /**
  * @description Check user login or not
  * @author Vijay Prajapati
  */
 canActivate() {
  const user = sessionStorage.getItem('email');
  if ( user === null) {
      return true;
    } else {
      window.location.href = SharedEnvironment.localUrl + 'dashboard';
      return false;
    }
}
}
