import { DashboardNewsfeedSidebarModule } from './dashboard-newsfeed-sidebar.module';

describe('DashboardNewsfeedSidebarModule', () => {
  let dashboardNewsfeedSidebarModule: DashboardNewsfeedSidebarModule;

  beforeEach(() => {
    dashboardNewsfeedSidebarModule = new DashboardNewsfeedSidebarModule();
  });

  it('should create an instance', () => {
    expect(dashboardNewsfeedSidebarModule).toBeTruthy();
  });
});
