import {NgModule} from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedTableComponent } from './shared-table/shared-table.component';

@NgModule({
  declarations: [
    AlertComponent,
    SharedTableComponent
  ],
  exports: [AlertComponent,SharedTableComponent],
  imports: [MessagesModule,BrowserAnimationsModule ,BrowserModule,ToastModule, MessageModule],
  providers: []
})

export class AlertModule { }
