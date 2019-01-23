import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedRoutingModule } from './/newsfeed-routing.module';

import { NewsfeedComponent } from './/newsfeed.component';

import { NewsfeedFollowingComponent } from './newsfeed-following/newsfeed-following.component';
import { NewsfeedSuggestedComponent } from './newsfeed-suggested/newsfeed-suggested.component';
import { NewsfeedTrendingComponent } from './newsfeed-trending/newsfeed-trending.component';
import { NewsfeedFiltersComponent } from './newsfeed-filters/newsfeed-filters.component';

@NgModule({
  imports: [
      CommonModule,
      NewsfeedRoutingModule
  ],
   exports: [
        NewsfeedRoutingModule
   ],
    declarations: [
       NewsfeedComponent,
       NewsfeedFollowingComponent,
       NewsfeedSuggestedComponent,
       NewsfeedTrendingComponent,
       NewsfeedFiltersComponent,
   ]
})
export class NewsfeedModule { }
