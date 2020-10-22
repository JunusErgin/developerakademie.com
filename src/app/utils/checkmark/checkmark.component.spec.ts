import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmarkComponent } from './checkmark.component';

describe('CheckmarkComponent', () => {
  let component: CheckmarkComponent;
  let fixture: ComponentFixture<CheckmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
