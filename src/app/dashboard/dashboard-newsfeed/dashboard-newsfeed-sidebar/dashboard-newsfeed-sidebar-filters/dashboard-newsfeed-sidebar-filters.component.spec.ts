import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedSidebarFiltersComponent } from './dashboard-newsfeed-sidebar-filters.component';

describe('DashboardNewsfeedSidebarFiltersComponent', () => {
  let component: DashboardNewsfeedSidebarFiltersComponent;
  let fixture: ComponentFixture<DashboardNewsfeedSidebarFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedSidebarFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedSidebarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
