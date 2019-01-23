import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedFiltersComponent } from './newsfeed-filters.component';

describe('NewsfeedFiltersComponent', () => {
  let component: NewsfeedFiltersComponent;
  let fixture: ComponentFixture<NewsfeedFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
