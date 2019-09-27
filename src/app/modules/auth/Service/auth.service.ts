import { Injectable } from '@angular/core';
import { SharedEnvironment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
}
