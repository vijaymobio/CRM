import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder) {}

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
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  /**
   * Login user
   * @param value
   * @author Vijay Prajapati
   */
  get form() { return this.loginform.controls; }
  login(value)  {
    this.submitted = true;
    if (this.loginform.valid) {
      this.authService.login(value).subscribe(res => {
        console.log(res);
      },  (error: HttpErrorResponse) => {
        alert(error.error.error);
    });
    } else {
      console.log(this.loginform);
    }
  }
}
