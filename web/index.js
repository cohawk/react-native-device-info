/**
 * react-native-web empty polyfill.
 */
var RNDeviceInfo = require('../default');

RNDeviceInfo.userAgent = window.navigator.userAgent;

RNDeviceInfo.deviceId = 'react-native-web-device-uuid-placeholder';

// http://localhost:4001/api/authnz/sessions/new/2d56ea33-8a0e-482a-92f2-9bd1df6bb963

module.exports = RNDeviceInfo;
