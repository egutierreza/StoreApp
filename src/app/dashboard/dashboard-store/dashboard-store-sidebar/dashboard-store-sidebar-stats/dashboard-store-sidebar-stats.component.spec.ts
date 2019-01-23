import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreSidebarStatsComponent } from './dashboard-store-sidebar-stats.component';

describe('DashboardStoreSidebarStatsComponent', () => {
  let component: DashboardStoreSidebarStatsComponent;
  let fixture: ComponentFixture<DashboardStoreSidebarStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreSidebarStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreSidebarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
