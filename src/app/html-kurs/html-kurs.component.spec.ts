import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlKursComponent } from './html-kurs.component';

describe('HtmlKursComponent', () => {
  let component: HtmlKursComponent;
  let fixture: ComponentFixture<HtmlKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
