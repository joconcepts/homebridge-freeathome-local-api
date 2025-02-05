# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.5.0) - 26.02.2023

### Added

- [#38](https://github.com/pgerke/homebridge-freeathome-local-api/issues/38):
  Support free@home scenes as switches in Apple Home
- [#40](https://github.com/pgerke/homebridge-freeathome-local-api/issues/40):
  Support the free@home weather station's ambient light and temperature sensors
- [#41](https://github.com/pgerke/homebridge-freeathome-local-api/issues/41):
  Sensor support: Switch sensors, dimmer sensors, scene sensors, staircase light sensors, triggers.
- [#43](https://github.com/pgerke/homebridge-freeathome-local-api/issues/43):
  Support door and window sensors

### Changed

- [#50](https://github.com/pgerke/homebridge-freeathome-local-api/issues/50):
  Smoke and motion sensors are now officially supported.

## [1.4.4](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.4.4) - 15.01.2023

### Changed

- [#42](https://github.com/pgerke/homebridge-freeathome-local-api/issues/42):
  Resolve correct data points for room temperature controller using the pairing ID.

## [1.4.3](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.4.3) - 04.01.2023

### Changed

- [#31](https://github.com/pgerke/homebridge-freeathome-local-api/issues/31):
  Added an option to automatically reset motion sensors after a predefined timeout.

## [1.4.2](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.4.2) - 03.01.2023

### Fixed

- [#48](https://github.com/pgerke/homebridge-freeathome-local-api/issues/48):
  Fixed an issue that interfered with the correct detection of smoke sensors.

## [1.4.1](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.4.1) - 04.12.2022

### Added

- [#35](https://github.com/pgerke/homebridge-freeathome-local-api/issues/35):
  Upgrade to Homebridge v1.6 and adapted NodeJS requirements. In accordance with the homebridge plugin verification criteria the [list of supported NodeJS](https://github.com/homebridge/homebridge/wiki/How-To-Update-Node.js) version has been updated. The plugin now officially supports NodeJS versions 14, 16 and 18. Please note, NodeJS version 12 is no longer supported.

- [#34](https://github.com/pgerke/homebridge-freeathome-local-api/issues/34):
  Added documentation to the README file about using TLS.

## [1.4.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.4) - 09.10.2022

### Added

- [PG-218](https://pgerke.atlassian.net/browse/PG-218):
  Added an option to disable TLS certificate verification. This is useful if the System Access Point is using a self-signed TLS certificate, but should not be used lightly as it may pose a security risk.

## [1.3.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.3) - 13.09.2022

### Added

- [PG-215](https://pgerke.atlassian.net/browse/PG-215):
  Support mapping types. You can now define that a switch actuator shall be created as an outlet instead of a switch / light bulb.

## [1.2.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.2) - 21.08.2022

### Added

- [PG-211](https://pgerke.atlassian.net/browse/PG-211):
  Experimentally support blinds and shutter actuators

## 1.1.1 - 24.07.2022

### Changed

- Bump dependencies

## [1.1.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.1) - 03.07.2022

### Added

- [PG-192](https://pgerke.atlassian.net/browse/PG-192):
  Support door openers
- [PG-203](https://pgerke.atlassian.net/browse/PG-203):
  Allow the user to specify channels and devices to ignore

## [1.0.0](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/1.0) - 27.06.2022

This is the first official release. The plugin now has full code coverage, meets the defined quality gate with respect to code style and has passed extensive stability tests as well as static code analysis, so I feel confident ending the preview phase at this time. The release version retains all features from v0.4.0-pre.

## 0.4.0-pre - 21.06.2022

### Added

- [PG-195](https://pgerke.atlassian.net/browse/PG-195):
  Experimentally support smoke detectors
- [PG-197](https://pgerke.atlassian.net/browse/PG-197):
  Experimentally support motion sensors
- [PG-177](https://pgerke.atlassian.net/browse/PG-177):
  Support sponsoring

### Fixed

- [PG-196](https://pgerke.atlassian.net/browse/PG-196):
  Fixed an issue with a regular expression causing update messages to be rejected

## 0.3.1-pre - 20.06.2022

### Fixed

- [PG-194](https://pgerke.atlassian.net/browse/PG-194):
  Re-added support for switch accessories (was removed accidentally)

## [0.3.0-pre](https://github.com/pgerke/homebridge-freeathome-local-api/releases/tag/0.3-pre) - 20.06.2022

### Added

- [PG-186](https://pgerke.atlassian.net/browse/PG-186):
  Automatic reconnection to System Access Point web socket after connection loss.
- [PG-192](https://pgerke.atlassian.net/browse/PG-192):
  Support automatic door opener
- [PG-190](https://pgerke.atlassian.net/browse/PG-190):
  Meet test coverage target

### Fixed

- [PG-193](https://pgerke.atlassian.net/browse/PG-193):
  Rolled back to ts-node@10.8.0 to fix an issue with code coverage calculation.

## 0.2.3-pre - 17.06.2022

### Fixed

- [PG-188](https://pgerke.atlassian.net/browse/PG-188), [#7](https://github.com/pgerke/homebridge-freeathome-local-api/issues/7):
  Fixed dimmer brightness fallback issue

## 0.2.2-pre - 16.06.2022

### Fixed

- [PG-184](https://pgerke.atlassian.net/browse/PG-184):
  Fixed broken config scheme

## 0.2.0-pre - 16.06.2022

### Added

- [PG-181](https://pgerke.atlassian.net/browse/PG-181):
  Support dimmer actuator
- [PG-182](https://pgerke.atlassian.net/browse/PG-182):
  Support thermostat actuator

### Changed

- [PG-179](https://pgerke.atlassian.net/browse/PG-179):
  Homekit get value requests will now be resolved from a cache instead of requesting the value from the system access point.

### Fixed

- [PG-178](https://pgerke.atlassian.net/browse/PG-178):
  Binary Switch is actually a switch actuator

## 0.1.0-pre - 14.06.2022

### Added

- [PG-144](https://pgerke.atlassian.net/browse/PG-144):
  Initial vertical increment, not published to npmjs.org yet.
- [PG-146](https://pgerke.atlassian.net/browse/PG-146):
  Support binary switch
