import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardScheduleContentComponent } from './dashboard-schedule-content.component';

describe('DashboardScheduleContentComponent', () => {
  let component: DashboardScheduleContentComponent;
  let fixture: ComponentFixture<DashboardScheduleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardScheduleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardScheduleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
