import { SidebarRoutingModule } from './sidebar-routing.module';

describe('SidebarRoutingModule', () => {
  let sidebarRoutingModule: SidebarRoutingModule;

  beforeEach(() => {
    SidebarRoutingModule = new SidebarRoutingModule();
  });

  it('should create an instance', () => {
    expect(SidebarRoutingModule).toBeTruthy();
  });
});
