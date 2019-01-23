import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { NewsfeedComponent } from './/newsfeed.component';
import { NewsfeedFollowingComponent } from './newsfeed-following/newsfeed-following.component';
import { NewsfeedSuggestedComponent } from './newsfeed-suggested/newsfeed-suggested.component';
import { NewsfeedTrendingComponent } from './newsfeed-trending/newsfeed-trending.component';
import { NewsfeedFiltersComponent } from './newsfeed-filters/newsfeed-filters.component';

export const NewsfeedRoutes: Routes = [
    {path: '', component: NewsfeedComponent,
        children:[
            {path: '', component: NewsfeedFollowingComponent},
            {path: 'suggested', component: NewsfeedSuggestedComponent},
            {path: 'trending', component: NewsfeedTrendingComponent},
            {path: 'filters', component: NewsfeedFiltersComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(NewsfeedRoutes)],
    exports: [RouterModule]
})


export class NewsfeedRoutingModule{}
