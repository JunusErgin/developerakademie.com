import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsLandingComponent } from './jobs-landing/jobs-landing.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [{
  component: JobDetailComponent,
  path: 'jobs/:title'
}, {
  component: JobsLandingComponent,
  path: ''
}, {
  component: JobsLandingComponent,
  path: 'karriere'
}, {
  redirectTo: '/',
  path: '**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
