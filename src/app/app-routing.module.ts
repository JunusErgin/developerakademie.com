import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsLandingComponent } from './jobs-landing/jobs-landing.component';
import { JobsComponent } from './jobs/jobs.component';
import { LandingComponent } from './landing/landing.component';
import { DatenschutzComponent } from './legal/datenschutz/datenschutz.component';
import { UnserTeamComponent } from './unser-team/unser-team.component';

const routes: Routes = [{
  component: JobDetailComponent,
  path: 'jobs/:title'
}, {
  component: LandingComponent,
  path: ''
}, {
  component: JobsLandingComponent,
  path: 'karriere'
}, {
  component: DatenschutzComponent,
  path: 'data-protection'
}, {
  component: UnserTeamComponent,
  path: 'unser-team'
}, {
  redirectTo: '/',
  path: '**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
