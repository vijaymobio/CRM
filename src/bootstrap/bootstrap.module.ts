import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from '../app/modules/template/bootstrap/bootstrap.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app/config/routes';
import { HttpClientModule } from '@angular/common/http';
import { TemplateModule } from '../app/modules/template/templet.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {BasicAuthHtppInterceptorService } from '../app/class/token.interceptor';
import { AlertModule} from '../app/modules/core/code.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    TemplateModule,
    AlertModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
    ],
  bootstrap: [BootstrapComponent]
})

export class BootstrapModule { }
