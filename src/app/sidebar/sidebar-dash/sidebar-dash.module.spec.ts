import { SidebarDashModule } from './sidebar-dash.module';

describe('SidebarDashModule', () => {
  let sidebarDashModule: SidebarDashModule;

  beforeEach(() => {
    sidebarDashModule = new SidebarDashModule();
  });

  it('should create an instance', () => {
    expect(sidebarDashModule).toBeTruthy();
  });
});
