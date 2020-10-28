import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRowComponent } from './second-row.component';

describe('SecondRowComponent', () => {
  let component: SecondRowComponent;
  let fixture: ComponentFixture<SecondRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
