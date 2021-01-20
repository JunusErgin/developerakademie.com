import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbComponent } from './agb.component';

describe('AgbComponent', () => {
  let component: AgbComponent;
  let fixture: ComponentFixture<AgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
