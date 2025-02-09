import { PlatformAccessory, Service } from "homebridge";
import { FreeAtHomeAccessory } from "./freeAtHomeAccessory";
import { FreeAtHomeContext } from "./freeAtHomeContext";
import { FreeAtHomeHomebridgePlatform } from "./platform";

/** A motion sensor accessory. */
export class MotionSensorAccessory extends FreeAtHomeAccessory {
  private readonly service: Service;
  private motionDetected: boolean;
  private resetTimeout?: NodeJS.Timeout;

  /**
   * Constructs a new motion sensor accessory instance.
   * @param platform The free&#64;home Homebridge platform controlling the accessory
   * @param accessory The platform accessory.
   */
  constructor(
    readonly platform: FreeAtHomeHomebridgePlatform,
    readonly accessory: PlatformAccessory<FreeAtHomeContext>
  ) {
    super(platform, accessory);

    // set initial state
    this.motionDetected = !!parseInt(
      this.accessory.context.channel.outputs?.odp0000.value ?? "0"
    );
    this.processAutoResetTimer();

    // get the MotionSensor service if it exists, otherwise create a new service instance
    this.service =
      this.accessory.getService(this.platform.Service.MotionSensor) ||
      this.accessory.addService(this.platform.Service.MotionSensor);

    // register handlers for the motion detected characteristic
    this.service
      .getCharacteristic(this.platform.Characteristic.MotionDetected)
      .onGet(() => this.motionDetected);
  }

  public override updateDatapoint(datapoint: string, value: string): void {
    // ignore unknown data points
    if (datapoint !== "odp0000") return;

    // do the update
    this.motionDetected = !!parseInt(value);
    this.processAutoResetTimer();

    this.doUpdateDatapoint(
      "Motion Sensor",
      this.service,
      this.platform.Characteristic.MotionDetected,
      this.motionDetected
    );
  }

  private processAutoResetTimer(): void {
    // Set, reset or cancel a timer, if automatic reset is enabled
    if (this.platform.config.motionSensorAutoReset as boolean) {
      // If a timer is running, clear it
      if (!!this.resetTimeout) {
        clearTimeout(this.resetTimeout);
        this.resetTimeout = undefined;
      }

      // Set a new reset timer, if motion was detected.
      if (this.motionDetected) {
        this.resetTimeout = setTimeout(
          () => this.updateDatapoint("odp0000", "0"),
          this.platform.config.motionSensorDefaultResetTimer as number
        );
      }
    }
  }
}
