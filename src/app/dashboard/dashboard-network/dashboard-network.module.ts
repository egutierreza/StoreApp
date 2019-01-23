import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNetworkContentComponent } from './dashboard-network-content/dashboard-network-content.component';
import { DashboardNetworkSidebarComponent } from './dashboard-network-sidebar/dashboard-network-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DashboardNetworkContentComponent,
    DashboardNetworkSidebarComponent,
  ],
  declarations: [DashboardNetworkContentComponent, DashboardNetworkSidebarComponent]
})
export class DashboardNetworkModule { }
