import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStoreContentComponent } from './dashboard-store-content.component';

describe('DashboardStoreContentComponent', () => {
  let component: DashboardStoreContentComponent;
  let fixture: ComponentFixture<DashboardStoreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStoreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
