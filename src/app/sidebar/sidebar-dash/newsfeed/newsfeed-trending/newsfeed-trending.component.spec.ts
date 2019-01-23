import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedTrendingComponent } from './newsfeed-trending.component';

describe('NewsfeedTrendingComponent', () => {
  let component: NewsfeedTrendingComponent;
  let fixture: ComponentFixture<NewsfeedTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
