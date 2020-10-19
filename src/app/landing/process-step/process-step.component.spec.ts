import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStepComponent } from './process-step.component';

describe('ProcessStepComponent', () => {
  let component: ProcessStepComponent;
  let fixture: ComponentFixture<ProcessStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
