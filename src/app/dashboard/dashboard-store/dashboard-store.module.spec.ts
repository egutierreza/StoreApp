import { DashboardStoreModule } from './dashboard-store.module';

describe('DashboardStoreModule', () => {
  let dashboardStoreModule: DashboardStoreModule;

  beforeEach(() => {
    dashboardStoreModule = new DashboardStoreModule();
  });

  it('should create an instance', () => {
    expect(dashboardStoreModule).toBeTruthy();
  });
});
