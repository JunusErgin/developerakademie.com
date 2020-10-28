import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DatenschutzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
