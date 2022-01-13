import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsLandingExternComponent } from './jobs-landing-extern/jobs-landing-extern.component';
import { JobsLandingComponent } from './jobs-landing/jobs-landing.component';
import { JobsComponent } from './jobs/jobs.component';
import { LandingComponent } from './landing/landing.component';
import { AgbComponent } from './legal/agb/agb.component';
import { CookieComponent } from './legal/cookie/cookie.component';
import { DatenschutzComponent } from './legal/datenschutz/datenschutz.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { WiderrufComponent } from './legal/widerruf/widerruf.component';
import { UnserTeamComponent } from './unser-team/unser-team.component';

const routes: Routes = [{
  component: JobDetailComponent,
  path: 'jobs/:title'
}, {
  component: LandingComponent,
  path: ''
}, {
  component: JobsLandingExternComponent,
  path: 'karriere'
}, {
  component: DatenschutzComponent,
  path: 'data-protection'
}, {
  component: DatenschutzComponent,
  path: 'datenschutz.html'
}, {
  component: AgbComponent,
  path: 'agb'
}, {
  component: AgbComponent,
  path: 'agb.html'
}, {
  component: WiderrufComponent,
  path: 'widerruf'
}, {
  component: WiderrufComponent,
  path: 'widerruf.html'
}, {
  component: UnserTeamComponent,
  path: 'unser-team'
}, {
  component: CookieComponent,
  path: 'cookie'
}, {
  component: ImprintComponent,
  path: 'imprint'
}, {
  component: ImprintComponent,
  path: 'impressum.html'
}, {
  redirectTo: '/',
  path: '**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
