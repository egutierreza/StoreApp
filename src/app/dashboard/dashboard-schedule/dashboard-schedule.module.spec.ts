import { DashboardScheduleModule } from './dashboard-schedule.module';

describe('DashboardScheduleModule', () => {
  let dashboardScheduleModule: DashboardScheduleModule;

  beforeEach(() => {
    dashboardScheduleModule = new DashboardScheduleModule();
  });

  it('should create an instance', () => {
    expect(dashboardScheduleModule).toBeTruthy();
  });
});
