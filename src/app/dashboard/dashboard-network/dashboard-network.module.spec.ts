import { DashboardNetworkModule } from './dashboard-network.module';

describe('DashboardNetworkModule', () => {
  let dashboardNetworkModule: DashboardNetworkModule;

  beforeEach(() => {
    dashboardNetworkModule = new DashboardNetworkModule();
  });

  it('should create an instance', () => {
    expect(dashboardNetworkModule).toBeTruthy();
  });
});
