import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from '../app/modules/template/bootstrap/bootstrap.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app/config/routes';
import { HttpClientModule } from '@angular/common/http';
import { TemplateModule } from '../app/modules/template/templet.module';
import { DashboardModule} from '../app/modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TemplateModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})

export class BootstrapModule { }
