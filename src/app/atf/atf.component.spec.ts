import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtfComponent } from './atf.component';

describe('AtfComponent', () => {
  let component: AtfComponent;
  let fixture: ComponentFixture<AtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
