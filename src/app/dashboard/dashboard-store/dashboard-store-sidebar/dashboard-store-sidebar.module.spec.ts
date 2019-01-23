import { DashboardStoreSidebarModule } from './dashboard-store-sidebar.module';

describe('DashboardStoreSidebarModule', () => {
  let dashboardStoreSidebarModule: DashboardStoreSidebarModule;

  beforeEach(() => {
    dashboardStoreSidebarModule = new DashboardStoreSidebarModule();
  });

  it('should create an instance', () => {
    expect(dashboardStoreSidebarModule).toBeTruthy();
  });
});
