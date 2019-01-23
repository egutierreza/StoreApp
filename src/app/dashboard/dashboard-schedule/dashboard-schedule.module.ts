import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardScheduleContentComponent } from './dashboard-schedule-content/dashboard-schedule-content.component';
import { DashboardScheduleSidebarComponent } from './dashboard-schedule-sidebar/dashboard-schedule-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      DashboardScheduleContentComponent,
      DashboardScheduleSidebarComponent,
  ],
  declarations: [
    DashboardScheduleContentComponent,
    DashboardScheduleSidebarComponent
  ]
})
export class DashboardScheduleModule { }
