import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingroutesComponent } from './climbingroutes.component';

describe('ClimbingroutesComponent', () => {
  let component: ClimbingroutesComponent;
  let fixture: ComponentFixture<ClimbingroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
