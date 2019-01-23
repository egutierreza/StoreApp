import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreSidebarInventoryComponent } from './dashboard-store-sidebar-inventory.component';

describe('DashboardStoreSidebarInventoryComponent', () => {
  let component: DashboardStoreSidebarInventoryComponent;
  let fixture: ComponentFixture<DashboardStoreSidebarInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreSidebarInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreSidebarInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
