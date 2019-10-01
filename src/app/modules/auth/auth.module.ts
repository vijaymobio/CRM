import { NgModule } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [{
  path : '',
  children : [
    { path: '', component: LoginComponent},
    { path: 'forgot', component: ForgotComponent}
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
  providers: []
})

export class AuthModule { }
