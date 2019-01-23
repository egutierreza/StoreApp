import { DashboardOptionsModule } from './dashboard-options.module';

describe('DashboardOptionsModule', () => {
  let dashboardOptionsModule: DashboardOptionsModule;

  beforeEach(() => {
    dashboardOptionsModule = new DashboardOptionsModule();
  });

  it('should create an instance', () => {
    expect(dashboardOptionsModule).toBeTruthy();
  });
});
