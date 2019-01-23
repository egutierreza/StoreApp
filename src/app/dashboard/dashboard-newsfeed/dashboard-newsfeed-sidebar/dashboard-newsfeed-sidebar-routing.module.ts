import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardNewsfeedSidebarFollowingComponent } from './dashboard-newsfeed-sidebar-following/dashboard-newsfeed-sidebar-following.component';
import { DashboardNewsfeedSidebarTrendingComponent} from './dashboard-newsfeed-sidebar-trending/dashboard-newsfeed-sidebar-trending.component';
import { DashboardNewsfeedSidebarSuggestedComponent } from './dashboard-newsfeed-sidebar-suggested/dashboard-newsfeed-sidebar-suggested.component';
import { DashboardNewsfeedSidebarFiltersComponent } from './dashboard-newsfeed-sidebar-filters/dashboard-newsfeed-sidebar-filters.component';

export const SidebarNewsfeedRoutes: Routes=[
    {path: "following", component: DashboardNewsfeedSidebarFollowingComponent, outlet: "sidebar"},
    {path: "trending", component: DashboardNewsfeedSidebarTrendingComponent, outlet: "sidebar"},
    {path: "suggested", component: DashboardNewsfeedSidebarSuggestedComponent, outlet: "sidebar"},
    {path: "filters", component: DashboardNewsfeedSidebarFiltersComponent, outlet: "sidebar"},
];
@NgModule({
    imports: [RouterModule.forChild(SidebarNewsfeedRoutes)],
    exports: [RouterModule]
})

export class DashboardNewsfeedSidebarRoutingModule {}
