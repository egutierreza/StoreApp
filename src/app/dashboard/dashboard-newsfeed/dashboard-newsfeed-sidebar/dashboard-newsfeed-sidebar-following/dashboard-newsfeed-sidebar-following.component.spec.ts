import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedSidebarFollowingComponent } from './dashboard-newsfeed-sidebar-following.component';

describe('DashboardNewsfeedSidebarFollowingComponent', () => {
  let component: DashboardNewsfeedSidebarFollowingComponent;
  let fixture: ComponentFixture<DashboardNewsfeedSidebarFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedSidebarFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedSidebarFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
