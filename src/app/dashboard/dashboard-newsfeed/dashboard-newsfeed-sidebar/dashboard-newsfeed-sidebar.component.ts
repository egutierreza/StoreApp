import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-newsfeed-sidebar',
  templateUrl: './dashboard-newsfeed-sidebar.component.html',
  styleUrls: ['./dashboard-newsfeed-sidebar.component.scss']
})
export class DashboardNewsfeedSidebarComponent implements OnInit {
    trendingHide: boolean = true;
    filtersHide: boolean = true;
    followingHide: boolean = true;
    suggestedHide: boolean = false;

    showTrending(){
        trendingHide: false;
        filtersHide: true;
        followingHide: true;
        suggestedHide: true;
    }
    showFilters(){
        trendingHide: true;
        filtersHide: false;
        followingHide: true;
        suggestedHide: true;
    }
    showFollowing(){
        trendingHide: true;
        filtersHide: true;
        followingHide: false;
        suggestedHide: true;
    }
    showSuggested(){
        trendingHide: true;
        filtersHide: true;
        followingHide: true;
        suggestedHide: false;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
