import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgotForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formValidate();
  }

  /**
   * Form Validate
   * @author vijay Prajapati
   */

  formValidate() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }


  get form() { return this.forgotForm.controls; }

  /**
   * Change password
   * @author vijay Prajapati
   */

  forgotPassword(value) {
    this.submitted = true;
    if (this.forgotForm.valid) {
      console.log(value);
    } else {
      return this.forgotForm.controls;
    }
  }
}
