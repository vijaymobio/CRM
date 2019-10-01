import {NgModule} from '@angular/core';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService as AuthGuard} from '../../../app/services/storage.service';
import { TemplateModule } from '../template/templet.module';

const routes: Routes = [{
  path : 'dashboard',
  children : [
    { path: '', component: DashboardComponent ,canActivate: [AuthGuard]}
  ]
}];
@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent],
  imports: [TemplateModule, RouterModule.forChild(routes)],
  providers: []
})

export class DashboardModule { }
