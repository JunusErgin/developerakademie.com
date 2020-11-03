import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnserTeamComponent } from './unser-team.component';

describe('UnserTeamComponent', () => {
  let component: UnserTeamComponent;
  let fixture: ComponentFixture<UnserTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnserTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnserTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
