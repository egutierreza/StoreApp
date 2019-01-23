import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './/dashboard-routing.module';
import { DashboardNewsfeedModule } from './dashboard-newsfeed/dashboard-newsfeed.module';
import { DashboardEmployeesModule } from './dashboard-employees/dashboard-employees.module';
import { DashboardNetworkModule } from './dashboard-network/dashboard-network.module';
import { DashboardOptionsModule } from './dashboard-options/dashboard-options.module';
import { DashboardScheduleModule } from './dashboard-schedule/dashboard-schedule.module';

import { DashboardScheduleComponent } from './dashboard-schedule/dashboard-schedule.component';
import { DashboardOptionsComponent } from './dashboard-options/dashboard-options.component';
import { DashboardEmployeesComponent } from './dashboard-employees/dashboard-employees.component';
import { DashboardStoreComponent } from './dashboard-store/dashboard-store.component';
import { DashboardNetworkComponent } from './dashboard-network/dashboard-network.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

import { DashboardComponent } from './/dashboard.component';
import { DashboardHomeContentComponent } from './dashboard-home/dashboard-home-content/dashboard-home-content.component';
import { DashboardStoreContentComponent } from './dashboard-store/dashboard-store-content/dashboard-store-content.component';
import { DashboardHomeSidebarComponent } from './dashboard-home/dashboard-home-sidebar/dashboard-home-sidebar.component';
import { DashboardStoreSidebarComponent } from './dashboard-store/dashboard-store-sidebar/dashboard-store-sidebar.component';


@NgModule({
  imports: [
      CommonModule,
      DashboardRoutingModule,
      DashboardNewsfeedModule,
      DashboardEmployeesModule,
      DashboardNetworkModule,
      DashboardOptionsModule,
      DashboardScheduleModule,
  ],
    declarations: [
        DashboardComponent,

        DashboardScheduleComponent, 
        DashboardOptionsComponent, 
        DashboardStoreComponent,
        DashboardNetworkComponent,
        DashboardHomeComponent,
        DashboardEmployeesComponent,
        DashboardHomeContentComponent,
        DashboardHomeSidebarComponent,
        DashboardStoreContentComponent,
        DashboardStoreSidebarComponent,
    ],
    bootstrap:[DashboardComponent]
})
export class DashboardModule { }
