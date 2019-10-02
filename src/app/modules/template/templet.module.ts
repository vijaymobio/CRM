import { NgModule } from '@angular/core';
import {HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [HeaderComponent,FooterComponent],
  imports: [],
  providers: []
})

export class TemplateModule { }
