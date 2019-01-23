import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SidebarDashComponent } from './/sidebar-dash.component';
import { HomeComponent } from './home/home.component';

export const SidebarDashRoutes: Routes = [
    {path: '', component: SidebarDashComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'newsfeed', loadChildren: './newsfeed/newsfeed-routing.module#NewsfeedRoutingModule'},
            {path: 'store', loadChildren: './store/store-routing.module#StoreRoutingModule'},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(SidebarDashRoutes)],
    exports: [RouterModule]
})

export class SidebarDashRoutingModule {}
