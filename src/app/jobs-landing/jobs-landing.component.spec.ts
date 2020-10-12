import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLandingComponent } from './jobs-landing.component';

describe('JobsLandingComponent', () => {
  let component: JobsLandingComponent;
  let fixture: ComponentFixture<JobsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
