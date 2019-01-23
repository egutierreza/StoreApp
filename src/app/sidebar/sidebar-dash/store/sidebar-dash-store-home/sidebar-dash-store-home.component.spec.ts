import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashStoreHomeComponent } from './sidebar-dash-store-home.component';

describe('SidebarDashStoreHomeComponent', () => {
  let component: SidebarDashStoreHomeComponent;
  let fixture: ComponentFixture<SidebarDashStoreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDashStoreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDashStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
