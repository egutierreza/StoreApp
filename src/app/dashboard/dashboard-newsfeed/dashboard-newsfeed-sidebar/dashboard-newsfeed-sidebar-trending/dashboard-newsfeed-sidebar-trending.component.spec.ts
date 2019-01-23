import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedSidebarTrendingComponent } from './dashboard-newsfeed-sidebar-trending.component';

describe('DashboardNewsfeedSidebarTrendingComponent', () => {
  let component: DashboardNewsfeedSidebarTrendingComponent;
  let fixture: ComponentFixture<DashboardNewsfeedSidebarTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedSidebarTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedSidebarTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
