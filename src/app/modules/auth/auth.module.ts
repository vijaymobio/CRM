import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthService as AuthGuard} from '../auth/Service/auth.service';
import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [{
  path : '',
  children : [
    { path: '', component: LoginComponent ,canActivate: [AuthGuard]},
    { path: 'forgot', component: ForgotComponent ,canActivate: [AuthGuard]}
  ]
}];

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CookieService]
})

export class AuthModule { }
