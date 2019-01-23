import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesSidebarComponent } from './dashboard-employees-sidebar.component';

describe('DashboardEmployeesSidebarComponent', () => {
  let component: DashboardEmployeesSidebarComponent;
  let fixture: ComponentFixture<DashboardEmployeesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployeesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
