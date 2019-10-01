import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/Service/auth.service';
import { validateEmail } from '../../../class/customeValidate';
import {  AuthenticationService } from '.././../../services/storage.service';
import { Router} from '@angular/router';
import { SharedEnvironment } from 'src/environments/environment';
import { SharedMessageService } from '../../../services/shared-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(
    private messageService: SharedMessageService,
    private router: Router,
    private storgaeService: AuthenticationService,
    private authService: AuthService,
    private fb: FormBuilder) {}

  loginform: FormGroup;
  submitted = false;

  ngOnInit() {
    this.formValidate();
  }

  /**
   * Form Validate
   * @author vijay Prajapati
   */
  formValidate() {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, validateEmail]],
      password: ['', [Validators.required, Validators.minLength(7)]],
  });
  }

  /**
   * Login user
   * @param value
   * @author Vijay Prajapati
   */
  get form() {return this.loginform.controls; }
  login(value)  {
    const value2 = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  };
    this.storgaeService.authenticate(value2.email, value2.password);
    this.submitted = true;
    if (this.loginform.valid) {
      this.authService.login(value2).subscribe(res => {
      if(res){
        this.sendMessage('success', 'Vijay Prajapati', 'Successfully Login');


      }

      },  (error: HttpErrorResponse) => {
        alert(error.error.error);
    });
    } else {
      console.log(this.loginform);
    }
  }
  sendMessage(abc: string , pqr: string, aws: string): void {
    console.log('yess called');

    // send message to subscribers via observable subject
    this.messageService.sendMessage(abc,pqr,aws);
    window.location.href = SharedEnvironment.localUrl + 'dashboard';
}
}
