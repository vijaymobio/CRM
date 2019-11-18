import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthService as AuthGuard} from '../auth/Service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const routes: Routes = [{
  path : '',
  children : [
    { path: '', component: LoginComponent ,canActivate: [AuthGuard]},
    { path: 'forgot', component: ForgotComponent ,canActivate: [AuthGuard]},
    { path: 'reset', component: ResetPasswordComponent}
  ]
}];

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [CookieService]
})

export class AuthModule { }
