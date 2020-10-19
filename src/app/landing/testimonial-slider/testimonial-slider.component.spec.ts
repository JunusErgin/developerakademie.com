import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSliderComponent } from './testimonial-slider.component';

describe('TestimonialSliderComponent', () => {
  let component: TestimonialSliderComponent;
  let fixture: ComponentFixture<TestimonialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
