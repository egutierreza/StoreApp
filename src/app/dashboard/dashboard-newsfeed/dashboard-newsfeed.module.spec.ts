import { DashboardNewsfeedModule } from './dashboard-newsfeed.module';

describe('DashboardNewsfeedModule', () => {
  let dashboardNewsfeedModule: DashboardNewsfeedModule;

  beforeEach(() => {
    dashboardNewsfeedModule = new DashboardNewsfeedModule();
  });

  it('should create an instance', () => {
    expect(dashboardNewsfeedModule).toBeTruthy();
  });
});
