'use strict';

// const Homey = require("homey");
const ButtonDevice = require('../button/device');

module.exports = class ButtonPlusDevice extends ButtonDevice {

  onInit() {
    super.onInit();
  }

  async deviceGenActionReceived(params) {
    super.deviceGenActionReceived(params);

    if (params.action === '5' && params.wheel) {
      this.logDebug(`deviceGenAction: wheelChanged > ${JSON.stringify(params)}`);
      // Battery-Level
      if (params.battery) {
        await this.setCapabilityValue('measure_battery', parseInt(params.battery, 10));
      }
      // Wheel-Value
      this.driver.triggerWheelChangedFlow(this, { value: parseInt(params.wheel, 10) }, { action: params.action });
    }
  }

};
