import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './/sidebar.component';
import { ModuleWithProviders } from '@angular/core';

export const SidebarRoutes: Routes = [
    {path: '', component: SidebarComponent,
        children: [
            {path: '', loadChildren: './sidebar-dash/sidebar-dash-routing.module#SidebarDashRoutingModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(SidebarRoutes)],
    exports: [RouterModule]
})

export class SidebarRoutingModule {}
