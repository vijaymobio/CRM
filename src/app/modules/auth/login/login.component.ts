import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/Service/auth.service';
import { HttpClient } from '@angular/common/http';
import { validateEmail } from '../../../../app/class/white-space-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private authService: AuthService, private fb: FormBuilder) {}

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

    this.submitted = true;
    if (this.loginform.valid) {
      this.authService.login(value).subscribe(res => {
      },  (error: HttpErrorResponse) => {
        alert(error.error.error);
    });
    } else {
      console.log(this.loginform);
    }
  }
}
