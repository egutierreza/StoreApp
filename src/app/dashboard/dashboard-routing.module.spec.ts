import { DasboardRoutingModule } from './dashboard-routing.module';

describe('DashboardRoutingModule', () => {
  let dashboardRoutingModule: DashboardRoutingModule;

  beforeEach(() => {
    DashboardRoutingModule = new DashboardRoutingModule();
  });

  it('should create an instance', () => {
    expect(DashboardRoutingModule).toBeTruthy();
  });
});
