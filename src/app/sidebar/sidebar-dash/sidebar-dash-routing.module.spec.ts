import { SidebarDashRoutingModule } from './sidebar-dash-routing.module';

describe('SidebarDashRoutingModule', () => {
  let sidebarDashRoutingModule: SidebarDashRoutingModule;

  beforeEach(() => {
    SidebarDashRoutingModule = new SidebarDashRoutingModule();
  });

  it('should create an instance', () => {
    expect(SidebarDashRoutingModule).toBeTruthy();
  });
});
