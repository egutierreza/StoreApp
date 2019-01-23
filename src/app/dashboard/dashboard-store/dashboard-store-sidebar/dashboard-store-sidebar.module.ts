import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStoreSidebarStatsComponent } from './dashboard-store-sidebar-stats/dashboard-store-sidebar-stats.component';
import { DashboardStoreSidebarOrdersComponent } from './dashboard-store-sidebar-orders/dashboard-store-sidebar-orders.component';
import { DashboardStoreSidebarInventoryComponent } from './dashboard-store-sidebar-inventory/dashboard-store-sidebar-inventory.component';
import { DashboardStoreSidebarLocationsComponent } from './dashboard-store-sidebar-locations/dashboard-store-sidebar-locations.component';
import { DashboardStoreSidebarRoutingModule } from './/dashboard-store-sidebar-routing.module';

@NgModule({
  imports: [
      CommonModule,
      DashboardStoreSidebarRoutingModule
  ],
  exports: [
      DashboardStoreSidebarRoutingModule
  ],
  declarations: [
    DashboardStoreSidebarStatsComponent, 
    DashboardStoreSidebarOrdersComponent, 
    DashboardStoreSidebarInventoryComponent, 
    DashboardStoreSidebarLocationsComponent
  ]
})
export class DashboardStoreSidebarModule { }
