import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeContentComponent } from './dashboard-home-content.component';

describe('DashboardHomeContentComponent', () => {
  let component: DashboardHomeContentComponent;
  let fixture: ComponentFixture<DashboardHomeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
