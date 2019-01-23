import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreSidebarLocationsComponent } from './dashboard-store-sidebar-locations.component';

describe('DashboardStoreSidebarLocationsComponent', () => {
  let component: DashboardStoreSidebarLocationsComponent;
  let fixture: ComponentFixture<DashboardStoreSidebarLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreSidebarLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreSidebarLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
