import { Logger, PlatformConfig } from "homebridge";
import { HomebridgeAPI } from "homebridge/lib/api";
import { FreeAtHomeHomebridgePlatform } from "./../src/platform";

const api = new HomebridgeAPI();
const config: PlatformConfig = {
  name: "Test Platform Configuration",
  platform: "free@home Unit Testing Platform",
};
const logger: Logger = {
  debug: jasmine.createSpy(),
  error: jasmine.createSpy(),
  info: jasmine.createSpy(),
  warn: jasmine.createSpy(),
  log: jasmine.createSpy(),
};

export class MockFreeAtHomeHomebridgePlatform extends FreeAtHomeHomebridgePlatform {
  constructor() {
    super(logger, config, api);
  }

  public resetLoggerCalls(): void {
    (this.log.debug as jasmine.Spy).calls.reset();
    (this.log.error as jasmine.Spy).calls.reset();
    (this.log.info as jasmine.Spy).calls.reset();
    (this.log.warn as jasmine.Spy).calls.reset();
    (this.log.log as jasmine.Spy).calls.reset();
  }
}