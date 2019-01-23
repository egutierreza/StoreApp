import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarDashRoutingModule } from './/sidebar-dash-routing.module';

import { SidebarDashComponent } from './/sidebar-dash.component';

import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { OptionsComponent } from './options/options.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StoreComponent } from './store/store.component';
import { MessagesComponent } from './messages/messages.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BusinessesComponent } from './businesses/businesses.component';

@NgModule({
  imports: [
      CommonModule,
      SidebarDashRoutingModule,
  ],
  exports: [
      SidebarDashRoutingModule,
  ],
    declarations: [
        HomeComponent, 
        NetworkComponent, 
        NewsfeedComponent, 
        OptionsComponent, 
        ScheduleComponent, 
        StoreComponent, 
        MessagesComponent, 
        AlertsComponent, 
        BusinessesComponent,
        SidebarDashComponent,
    ]
})
export class SidebarDashModule { }
