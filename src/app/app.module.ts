import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule} from './dashboard/dashboard-routing.module';
import { HomeComponent } from './sidebar/sidebar-dash/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { StoreComponent } from './store/store.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
