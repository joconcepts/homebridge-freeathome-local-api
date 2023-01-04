import { PlatformAccessory, Service } from "homebridge";
import { FreeAtHomeAccessory } from "./freeAtHomeAccessory";
import { FreeAtHomeContext } from "./freeAtHomeContext";
import { FreeAtHomeHomebridgePlatform } from "./platform";

/** A switch sensor accessory. */
export class SwitchSensorAccessory extends FreeAtHomeAccessory {
  private readonly service: Service;

  /**
   * Constructs a new switch sensor accessory instance.
   * @param platform The free&#64;home Homebridge platform controlling the accessory
   * @param accessory The platform accessory.
   */
  constructor(
    readonly platform: FreeAtHomeHomebridgePlatform,
    readonly accessory: PlatformAccessory<FreeAtHomeContext>
  ) {
    super(platform, accessory);

    // get the StatelessProgrammableSwitch service if it exists, otherwise create a new service instance
    this.service =
      this.accessory.getService(
        this.platform.Service.StatelessProgrammableSwitch
      ) ||
      this.accessory.addService(
        this.platform.Service.StatelessProgrammableSwitch
      );

    // register handlers for the switch output state characteristic
    this.service
      .getCharacteristic(this.platform.Characteristic.ProgrammableSwitchEvent)
      .onGet(
        () => this.platform.Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS
      );
  }

  public override updateDatapoint(datapoint: string): void {
    // ignore unknown data points
    if (datapoint !== "idp0000") return;

    this.platform.log.info(
      // eslint-disable-next-line max-len
      `${this.accessory.displayName} ("Switch Sensor" ${this.serialNumber}) triggered ${this.platform.Characteristic.ProgrammableSwitchEvent.name}`
    );
    this.service
      .getCharacteristic(this.platform.Characteristic.ProgrammableSwitchEvent)
      .sendEventNotification(
        this.platform.Characteristic.ProgrammableSwitchEvent.SINGLE_PRESS
      );
  }
}
