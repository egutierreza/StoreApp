import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEmployeesContentComponent } from './dashboard-employees-content/dashboard-employees-content.component';
import { DashboardEmployeesSidebarComponent } from './dashboard-employees-sidebar/dashboard-employees-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      DashboardEmployeesContentComponent,
      DashboardEmployeesSidebarComponent,
  ],
  declarations: [DashboardEmployeesContentComponent, DashboardEmployeesSidebarComponent]
})
export class DashboardEmployeesModule { }
