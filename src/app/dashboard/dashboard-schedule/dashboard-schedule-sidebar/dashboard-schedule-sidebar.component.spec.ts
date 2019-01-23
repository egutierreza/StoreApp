import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardScheduleSidebarComponent } from './dashboard-schedule-sidebar.component';

describe('DashboardScheduleSidebarComponent', () => {
  let component: DashboardScheduleSidebarComponent;
  let fixture: ComponentFixture<DashboardScheduleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardScheduleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardScheduleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
