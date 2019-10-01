import {NgModule} from '@angular/core';
import {DashboardComponent} from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent],
  imports: [],
  providers: []
})

export class DashboardModule { }
