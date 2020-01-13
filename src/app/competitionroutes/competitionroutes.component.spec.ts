import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionroutesComponent } from './competitionroutes.component';

describe('CompetitionroutesComponent', () => {
  let component: CompetitionroutesComponent;
  let fixture: ComponentFixture<CompetitionroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
