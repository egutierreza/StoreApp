import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedSidebarSuggestedComponent } from './dashboard-newsfeed-sidebar-suggested.component';

describe('DashboardNewsfeedSidebarSuggestedComponent', () => {
  let component: DashboardNewsfeedSidebarSuggestedComponent;
  let fixture: ComponentFixture<DashboardNewsfeedSidebarSuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedSidebarSuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedSidebarSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
