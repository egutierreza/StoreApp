import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './/dashboard.component';
import { ModuleWithProviders } from '@angular/core';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardStoreComponent } from './dashboard-store/dashboard-store.component';
import { DashboardAppointmentsComponent } from './dashboard-appointments/dashboard-appointments.component';
import { DashboardNetworkComponent } from './dashboard-network/dashboard-network.component';
import { DashboardScheduleComponent } from './dashboard-schedule/dashboard-schedule.component';
import { DashboardOptionsComponent } from './dashboard-options/dashboard-options.component';
import { DashboardEmployeesComponent } from './dashboard-employees/dashboard-employees.component';

export const DashboardRoutes: Routes=[
    {path: '', component: DashboardComponent,
        children: [
            {path: '', component: DashboardHomeComponent},
            {
                path: 'newsfeed', 
                loadChildren: './dashboard-newsfeed/dashboard-newsfeed.module#DashboardNewsfeedModule',
            },
            {path: 'schedule', component: DashboardScheduleComponent},
            {path: 'settings', component: DashboardOptionsComponent},
            {path: 'employees', component: DashboardEmployeesComponent},
            {path: 'store', component: DashboardStoreComponent},
            {path: 'network', component: DashboardNetworkComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
