import { ZoneModule } from './zone.module';

describe('ZoneModule', () => {
  let zoneModule: ZoneModule;

  beforeEach(() => {
    zoneModule = new ZoneModule();
  });

  it('should create an instance', () => {
    expect(zoneModule).toBeTruthy();
  });
});
