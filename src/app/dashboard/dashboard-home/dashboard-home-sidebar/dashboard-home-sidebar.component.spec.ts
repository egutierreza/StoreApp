import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeSidebarComponent } from './dashboard-home-sidebar.component';

describe('DashboardHomeSidebarComponent', () => {
  let component: DashboardHomeSidebarComponent;
  let fixture: ComponentFixture<DashboardHomeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
