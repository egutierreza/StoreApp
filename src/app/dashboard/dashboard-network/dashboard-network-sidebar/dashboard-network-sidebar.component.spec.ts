import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNetworkSidebarComponent } from './dashboard-network-sidebar.component';

describe('DashboardNetworkSidebarComponent', () => {
  let component: DashboardNetworkSidebarComponent;
  let fixture: ComponentFixture<DashboardNetworkSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNetworkSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNetworkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
