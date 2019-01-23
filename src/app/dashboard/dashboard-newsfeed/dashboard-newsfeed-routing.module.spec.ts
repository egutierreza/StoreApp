import { DasboardNewsfeedRoutingModule } from './dashboard-newsfeed-routing.module';

describe('DashboardNewsfeedRoutingModule', () => {
  let dashboardNewsfeedRoutingModule: DashboardNewsfeedRoutingModule;

  beforeEach(() => {
    DashboardNewsfeedRoutingModule = new DashboardNewsfeedRoutingModule();
  });

  it('should create an instance', () => {
    expect(DashboardNewsfeedRoutingModule).toBeTruthy();
  });
});
