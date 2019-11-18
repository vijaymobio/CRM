import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatePassword} from '../../../class/customeValidate';
import { AuthService} from '../Service/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder, private authService : AuthService) { }

  ngOnInit() {
    this.formValidate();
  }

  /**
   * Form Validate
   * @author vijay Prajapati
   */

  formValidate() {
    this.resetForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, validatePassword]],
      confirmPassword: ['', [Validators.required]],
     });

  }
  get form() {
   return this.resetForm.controls; }

  /**
   * Reset Password
   * @param value
   * @au Vijay Prajapati
   */
  resetPassword(value) {
    this.submitted = true;
    if (this.resetForm.valid) {
      if (this.resetForm.get('newPassword').value !== this.resetForm.get('confirmPassword').value) {
        this.resetForm.get('confirmPassword').setErrors({ incorrect: true });
        console.log('not matched -> ', this.resetForm);
      } else {
        console.log('Success');

        // this.authService.snakBar('Password change Sucessfully', 'Done');
      }
    } else {
      return this.resetForm.controls;
    }
  }
}
