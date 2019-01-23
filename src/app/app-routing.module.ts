import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes=[
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: 'shop', component: StoreComponent},
    {path: 'profile', component: ProfileComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
