import { DasboardStoreSidebarRoutingModule } from './dashboard-store-sidebar-routing.module';

describe('DashboardStoreSidebarRoutingModule', () => {
  let dashboardStoreSidebarRoutingModule: DashboardStoreSidebarRoutingModule;

  beforeEach(() => {
    DashboardStoreSidebarRoutingModule = new DashboardStoreSidebarRoutingModule();
  });

  it('should create an instance', () => {
    expect(DashboardStoreSidebarRoutingModule).toBeTruthy();
  });
});
