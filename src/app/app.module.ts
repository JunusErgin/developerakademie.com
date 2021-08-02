import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AtfComponent } from './atf/atf.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsLandingComponent } from './jobs-landing/jobs-landing.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { LandingComponent } from './landing/landing.component';
import { ProcessStepComponent } from './landing/process-step/process-step.component';
import { TestimonialSliderComponent } from './landing/testimonial-slider/testimonial-slider.component';
import { CheckmarkComponent } from './utils/checkmark/checkmark.component';
import { CardComponent } from './utils/card/card.component';
import { StatisticsComponent } from './landing/statistics/statistics.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { SecondRowComponent } from './landing/second-row/second-row.component';
import { DatenschutzComponent } from './legal/datenschutz/datenschutz.component';
import { UnserTeamComponent } from './unser-team/unser-team.component';
import { HeadSectionComponent } from './landing/head-section/head-section.component';
import { MobileTestimonialSliderComponent } from './landing/mobile-testimonial-slider/mobile-testimonial-slider.component';
import { AgbComponent } from './legal/agb/agb.component';
import { WiderrufComponent } from './legal/widerruf/widerruf.component';
import { CookieComponent } from './legal/cookie/cookie.component';
import { ImprintComponent } from './legal/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtfComponent,
    JobsComponent,
    JobDescriptionComponent,
    JobDetailComponent,
    JobsLandingComponent,
    FooterComponent,
    SectionComponent,
    LandingComponent,
    ProcessStepComponent,
    TestimonialSliderComponent,
    CheckmarkComponent,
    CardComponent,
    StatisticsComponent,
    PreFooterComponent,
    SecondRowComponent,
    DatenschutzComponent,
    UnserTeamComponent,
    HeadSectionComponent,
    MobileTestimonialSliderComponent,
    AgbComponent,
    WiderrufComponent,
    CookieComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
