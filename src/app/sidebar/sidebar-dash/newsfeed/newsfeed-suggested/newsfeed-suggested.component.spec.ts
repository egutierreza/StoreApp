import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedSuggestedComponent } from './newsfeed-suggested.component';

describe('NewsfeedSuggestedComponent', () => {
  let component: NewsfeedSuggestedComponent;
  let fixture: ComponentFixture<NewsfeedSuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedSuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
