import { DashboardEmployeesModule } from './dashboard-employees.module';

describe('DashboardEmployeesModule', () => {
  let dashboardEmployeesModule: DashboardEmployeesModule;

  beforeEach(() => {
    dashboardEmployeesModule = new DashboardEmployeesModule();
  });

  it('should create an instance', () => {
    expect(dashboardEmployeesModule).toBeTruthy();
  });
});
