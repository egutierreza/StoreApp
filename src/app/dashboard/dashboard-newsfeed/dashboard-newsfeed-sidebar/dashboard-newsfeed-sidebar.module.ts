import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardNewsfeedSidebarRoutingModule } from './/dashboard-newsfeed-sidebar-routing.module';

import { DashboardNewsfeedSidebarFollowingComponent } from './dashboard-newsfeed-sidebar-following/dashboard-newsfeed-sidebar-following.component';
import { DashboardNewsfeedSidebarTrendingComponent } from './dashboard-newsfeed-sidebar-trending/dashboard-newsfeed-sidebar-trending.component';
import { DashboardNewsfeedSidebarSuggestedComponent } from './dashboard-newsfeed-sidebar-suggested/dashboard-newsfeed-sidebar-suggested.component';
import { DashboardNewsfeedSidebarFiltersComponent } from './dashboard-newsfeed-sidebar-filters/dashboard-newsfeed-sidebar-filters.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardNewsfeedSidebarRoutingModule,
  ],
    exports: [
    DashboardNewsfeedSidebarFollowingComponent, 
    DashboardNewsfeedSidebarTrendingComponent, 
    DashboardNewsfeedSidebarSuggestedComponent, 
    DashboardNewsfeedSidebarFiltersComponent
  ],
  declarations: [
    DashboardNewsfeedSidebarFollowingComponent, 
    DashboardNewsfeedSidebarTrendingComponent, 
    DashboardNewsfeedSidebarSuggestedComponent, 
    DashboardNewsfeedSidebarFiltersComponent
  ]
})
export class DashboardNewsfeedSidebarModule { }
