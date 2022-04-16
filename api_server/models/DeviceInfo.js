var mongoose = require("mongoose");

var deviceInfoSchema = mongoose.Schema({
  devID: String,
  current1: String,
  current2: String,
  dynamo_status: String,
  relay_warning1: String,
  relay_warning2: String,
  status1: String,
  status2: String,
  temperature: String,
  temperature_warning: String,
  voltage1: String,
  voltage2: String,
  wifi_status: String,
});

var DeviceInfo = mongoose.model("DeviceInfo", deviceInfoSchema);

module.exports = DeviceInfo;
