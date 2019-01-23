import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNetworkContentComponent } from './dashboard-network-content.component';

describe('DashboardNetworkContentComponent', () => {
  let component: DashboardNetworkContentComponent;
  let fixture: ComponentFixture<DashboardNetworkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNetworkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNetworkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
