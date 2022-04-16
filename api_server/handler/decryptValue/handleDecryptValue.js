var { storeToTempDeviceJSON, storeToDB } = require("../../handler");
const { DeviceInfo } = require("../../models");
module.exports = (decryptJSON) => {
  storeToTempDeviceJSON(decryptJSON);
  const { devID } = decryptJSON;
  storeToDB(DeviceInfo, decryptJSON, devID);
};
