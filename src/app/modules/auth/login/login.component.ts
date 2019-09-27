import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, EmailValidator } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/Service/auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private fb: FormBuilder, private http: HttpClient) {}
  loginform: FormGroup;
  submitted = false;
    ngOnInit() {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
