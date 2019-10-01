import {NgModule} from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [AlertComponent],
  imports: [MessagesModule,BrowserAnimationsModule ,BrowserModule,ToastModule, MessageModule],
  providers: []
})

export class AlertModule { }
