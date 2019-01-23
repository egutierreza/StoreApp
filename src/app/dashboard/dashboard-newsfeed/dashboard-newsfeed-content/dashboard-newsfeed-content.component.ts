import { Component, OnInit } from '@angular/core';
import { SocialPost } from './socialpost';
@Component({
  selector: 'app-dashboard-newsfeed-content',
  templateUrl: './dashboard-newsfeed-content.component.html',
  styleUrls: ['./dashboard-newsfeed-content.component.scss']
})
export class DashboardNewsfeedContentComponent implements OnInit {

  newsfeed: SocialPost[];
  openPostModal(){
    window.alert("You done did it");
  }
  constructor() { }

  ngOnInit() {
  }

}
