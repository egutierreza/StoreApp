import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './/sidebar.component';
import { SidebarRoutingModule } from './/sidebar-routing.module';


@NgModule({
  imports: [
      CommonModule,
      SidebarRoutingModule
  ],
  exports: [
      SidebarRoutingModule
  ],
    declarations: [SidebarComponent],
})
export class SidebarModule { }
