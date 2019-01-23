import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPostModalComponent } from './newsfeed-post-modal.component';

describe('NewsfeedPostModalComponent', () => {
  let component: NewsfeedPostModalComponent;
  let fixture: ComponentFixture<NewsfeedPostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
