import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLandingExternComponent } from './jobs-landing-extern.component';

describe('JobsLandingExternComponent', () => {
  let component: JobsLandingExternComponent;
  let fixture: ComponentFixture<JobsLandingExternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsLandingExternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsLandingExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
