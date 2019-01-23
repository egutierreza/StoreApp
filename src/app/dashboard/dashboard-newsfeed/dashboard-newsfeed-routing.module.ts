import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardNewsfeedComponent } from './/dashboard-newsfeed.component';
import { NewsfeedPostModalComponent } from './newsfeed-post-modal/newsfeed-post-modal.component';


export const DashboardNewsfeedRoutes: Routes = [
    {path: '', component: DashboardNewsfeedComponent, 
        children: [
            {path: 'post', component: NewsfeedPostModalComponent},
        ],
];

@NgModule({
    imports: [RouterModule.forChild(DashboardNewsfeedRoutes)],
    exports: [RouterModule]
})

export class DashboardNewsfeedRoutingModule {}
