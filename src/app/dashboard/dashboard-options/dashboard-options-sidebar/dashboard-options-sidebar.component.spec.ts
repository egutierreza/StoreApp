import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOptionsSidebarComponent } from './dashboard-options-sidebar.component';

describe('DashboardOptionsSidebarComponent', () => {
  let component: DashboardOptionsSidebarComponent;
  let fixture: ComponentFixture<DashboardOptionsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOptionsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOptionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
