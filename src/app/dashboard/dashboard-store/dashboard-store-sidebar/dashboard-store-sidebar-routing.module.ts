import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardStoreSidebarStatsComponent } from './dashboard-store-sidebar-stats/dashboard-store-sidebar-stats.component';
import { DashboardStoreSidebarOrdersComponent } from './dashboard-store-sidebar-orders/dashboard-store-sidebar-orders.component';
import { DashboardStoreSidebarInventoryComponent } from './dashboard-store-sidebar-inventory/dashboard-store-sidebar-inventory.component';
import { DashboardStoreSidebarLocationsComponent } from './dashboard-store-sidebar-locations/dashboard-store-sidebar-locations.component';

export const SidebarStoreRoutes: Routes=[
    {path: "stats", component: DashboardStoreSidebarStatsComponent, outlet: "sidebar"},
    {path: "orders", component: DashboardStoreSidebarOrdersComponent, outlet: "sidebar"},
    {path: "inventory", component: DashboardStoreSidebarInventoryComponent, outlet: "sidebar"},
    {path: "locations", component: DashboardStoreSidebarLocationsComponent, outlet: "sidebar"},
];
@NgModule({
    imports: [RouterModule.forChild(SidebarStoreRoutes)],
    exports: [RouterModule]
})

export class DashboardStoreSidebarRoutingModule {}
