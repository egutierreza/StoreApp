import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardNewsfeedRoutingModule } from './/dashboard-newsfeed-routing.module';
import { DashboardNewsfeedComponent } from './/dashboard-newsfeed.component';

import { DashboardNewsfeedContentComponent } from './dashboard-newsfeed-content/dashboard-newsfeed-content.component';
import { DashboardNewsfeedSidebarComponent } from './dashboard-newsfeed-sidebar/dashboard-newsfeed-sidebar.component';

import { DashboardNewsfeedSidebarModule } from './dashboard-newsfeed-sidebar/dashboard-newsfeed-sidebar.module';
import { NewsfeedPostModalComponent } from './newsfeed-post-modal/newsfeed-post-modal.component';
@NgModule({
  imports: [
      CommonModule,
      DashboardNewsfeedSidebarModule,
      DashboardNewsfeedRoutingModule,
  ],
    exports: [
        DashboardNewsfeedSidebarComponent,
        DashboardNewsfeedContentComponent,
        NewsfeedPostModalComponent,
  ],
    declarations: [
        DashboardNewsfeedComponent, 

        DashboardNewsfeedContentComponent, 
        DashboardNewsfeedSidebarComponent, 
        NewsfeedPostModalComponent
    ]
})
export class DashboardNewsfeedModule { }
