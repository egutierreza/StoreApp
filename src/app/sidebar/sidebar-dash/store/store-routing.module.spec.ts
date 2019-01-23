import { StoreRoutingModule } from './store-routing.module';

describe('StoreRoutingModule', () => {
  let storeRoutingModule: StoreRoutingModule;

  beforeEach(() => {
    storeRoutingModule = new StoreRoutingModule();
  });

  it('should create an instance', () => {
    expect(StoreRoutingModule).toBeTruthy();
  });
});
