import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreSidebarComponent } from './dashboard-store-sidebar.component';

describe('DashboardStoreSidebarComponent', () => {
  let component: DashboardStoreSidebarComponent;
  let fixture: ComponentFixture<DashboardStoreSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
