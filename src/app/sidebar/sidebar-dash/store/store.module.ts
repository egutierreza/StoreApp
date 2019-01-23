import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './/store-routing.module';

import { StoreOrdersComponent } from './store-orders/store-orders.component';
import { StoreInventoryComponent } from './store-inventory/store-inventory.component';
import { StoreLocationsComponent } from './store-locations/store-locations.component';
import { SidebarDashStoreHomeComponent } from './sidebar-dash-store-home/sidebar-dash-store-home.component';

@NgModule({
  imports: [
      CommonModule,
      StoreRoutingModule,
  ],
  exports: [
      StoreRoutingModule
  ],
  declarations: [StoreOrdersComponent, StoreInventoryComponent, StoreLocationsComponent, SidebarDashStoreHomeComponent]
})
export class StoreModule { }
