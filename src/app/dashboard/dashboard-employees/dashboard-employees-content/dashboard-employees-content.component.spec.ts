import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesContentComponent } from './dashboard-employees-content.component';

describe('DashboardEmployeesContentComponent', () => {
  let component: DashboardEmployeesContentComponent;
  let fixture: ComponentFixture<DashboardEmployeesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployeesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
