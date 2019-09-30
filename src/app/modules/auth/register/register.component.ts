import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../../auth/password-compare';
import {AuthService} from '../Service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formValidate();
  }
/**
 * Validate form
 * @author  Vijay Prajapati
 */
  get form() { return this.registerForm.controls; }


  /**
   * Form validate
   * @author Vijay Prajapati
   */

  formValidate() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
        }, {
          validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  /**
   * Resiter form
   * @param value
   * @author vijay Prajapati
   *
   */

  onSubmit(value) {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    } else {
      this.authService.registerUser(value).subscribe(res => {
        console.log(res);
      },  (error: HttpErrorResponse) => {
       alert(error.error.error);
      });
    }
  }
}
