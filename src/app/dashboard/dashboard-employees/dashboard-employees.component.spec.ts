import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeesComponent } from './dashboard-employees.component';

describe('DashboardEmployeesComponent', () => {
  let component: DashboardEmployeesComponent;
  let fixture: ComponentFixture<DashboardEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
