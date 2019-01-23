import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedSidebarComponent } from './dashboard-newsfeed-sidebar.component';

describe('DashboardNewsfeedSidebarComponent', () => {
  let component: DashboardNewsfeedSidebarComponent;
  let fixture: ComponentFixture<DashboardNewsfeedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
