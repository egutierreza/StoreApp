import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOptionsContentComponent } from './dashboard-options-content/dashboard-options-content.component';
import { DashboardOptionsSidebarComponent } from './dashboard-options-sidebar/dashboard-options-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DashboardOptionsContentComponent, 
    DashboardOptionsSidebarComponent,
  ],
  declarations: [
    DashboardOptionsContentComponent, 
    DashboardOptionsSidebarComponent
  ]
})
export class DashboardOptionsModule { }
