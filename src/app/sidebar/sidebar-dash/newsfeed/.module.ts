import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedTrendingComponent } from './newsfeed-trending/newsfeed-trending.component';
import { NewsfeedFollowingComponent } from './newsfeed-following/newsfeed-following.component';
import { NewsfeedSuggestedComponent } from './newsfeed-suggested/newsfeed-suggested.component';
import { NewsfeedFiltersComponent } from './newsfeed-filters/newsfeed-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsfeedTrendingComponent, NewsfeedFollowingComponent, NewsfeedSuggestedComponent, NewsfeedFiltersComponent]
})
export class Module { }
