import { AllModulesModule } from './all-modules.module';

describe('AllModulesModule', () => {
  let allModulesModule: AllModulesModule;

  beforeEach(() => {
    allModulesModule = new AllModulesModule();
  });

  it('should create an instance', () => {
    expect(allModulesModule).toBeTruthy();
  });
});
