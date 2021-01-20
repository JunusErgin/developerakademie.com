import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiderrufComponent } from './widerruf.component';

describe('WiderrufComponent', () => {
  let component: WiderrufComponent;
  let fixture: ComponentFixture<WiderrufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiderrufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiderrufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
