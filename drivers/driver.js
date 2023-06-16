'use strict';

const { MyDriver } = require('my-homey');

module.exports = class BaseDriver extends MyDriver {

  onInit() {
    super.onInit();
  }

  // NOTE: simplelog-api on/off

  logDebug(msg) {
    if (process.env.DEBUG === '1') {
      super.logDebug(msg);
    }
  }

};
