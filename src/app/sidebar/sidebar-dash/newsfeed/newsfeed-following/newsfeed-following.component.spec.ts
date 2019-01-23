import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedFollowingComponent } from './newsfeed-following.component';

describe('NewsfeedFollowingComponent', () => {
  let component: NewsfeedFollowingComponent;
  let fixture: ComponentFixture<NewsfeedFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
