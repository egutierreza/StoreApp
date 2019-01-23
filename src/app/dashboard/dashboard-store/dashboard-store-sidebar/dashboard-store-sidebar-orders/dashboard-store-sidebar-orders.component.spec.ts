import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreSidebarOrdersComponent } from './dashboard-store-sidebar-orders.component';

describe('DashboardStoreSidebarOrdersComponent', () => {
  let component: DashboardStoreSidebarOrdersComponent;
  let fixture: ComponentFixture<DashboardStoreSidebarOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreSidebarOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreSidebarOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
