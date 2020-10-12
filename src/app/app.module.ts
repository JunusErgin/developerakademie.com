import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AtfComponent } from './atf/atf.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDescriptionComponent } from './job-description/job-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtfComponent,
    JobsComponent,
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
