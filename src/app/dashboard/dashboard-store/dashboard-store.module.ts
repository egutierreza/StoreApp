import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStoreContentComponent } from './dashboard-store-content/dashboard-store-content.component';
import { DashboardStoreSidebarComponent } from './dashboard-store-sidebar/dashboard-store-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardStoreContentComponent, DashboardStoreSidebarComponent]
})
export class DashboardStoreModule { }
