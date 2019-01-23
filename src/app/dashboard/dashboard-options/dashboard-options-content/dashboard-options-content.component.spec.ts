import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOptionsContentComponent } from './dashboard-options-content.component';

describe('DashboardOptionsContentComponent', () => {
  let component: DashboardOptionsContentComponent;
  let fixture: ComponentFixture<DashboardOptionsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOptionsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOptionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
