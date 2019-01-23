import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { StoreComponent } from './/store.component';
import { SidebarDashStoreHomeComponent } from './sidebar-dash-store-home/sidebar-dash-store-home.component';
import { StoreInventoryComponent } from './store-inventory/store-inventory.component';
import { StoreOrdersComponent } from './store-orders/store-orders.component';
import { StoreLocationsComponent } from './store-locations/store-locations.component';

export const StoreRoutes: Routes = [
    {path: '', component: StoreComponent,
        children:[
            {path: '', component: SidebarDashStoreHomeComponent},
            {path: 'inventory', component: StoreInventoryComponent},
            {path: 'orders', component: StoreOrdersComponent},
            {path: 'locations', component: StoreOrdersComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(StoreRoutes)],
    exports: [RouterModule]
})


export class StoreRoutingModule {}
