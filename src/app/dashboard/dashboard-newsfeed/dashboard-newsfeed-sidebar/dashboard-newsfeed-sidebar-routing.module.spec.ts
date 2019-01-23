import { DasboardNewsfeedSidebarRoutingModule } from './dashboard-newsfeed-sidebar-routing.module';

describe('DashboardNewsfeedSidebarRoutingModule', () => {
  let dashboardNewsfeedSidebarRoutingModule: DashboardNewsfeedSidebarRoutingModule;

  beforeEach(() => {
    DashboardNewsfeedSidebarRoutingModule = new DashboardNewsfeedSidebarRoutingModule();
  });

  it('should create an instance', () => {
    expect(DashboardNewsfeedSidebarRoutingModule).toBeTruthy();
  });
});
