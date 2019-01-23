import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsfeedContentComponent } from './dashboard-newsfeed-content.component';

describe('DashboardNewsfeedContentComponent', () => {
  let component: DashboardNewsfeedContentComponent;
  let fixture: ComponentFixture<DashboardNewsfeedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsfeedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsfeedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
