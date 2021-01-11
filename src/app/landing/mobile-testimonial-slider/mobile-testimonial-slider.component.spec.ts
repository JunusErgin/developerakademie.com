import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTestimonialSliderComponent } from './mobile-testimonial-slider.component';

describe('MobileTestimonialSliderComponent', () => {
  let component: MobileTestimonialSliderComponent;
  let fixture: ComponentFixture<MobileTestimonialSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTestimonialSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTestimonialSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
