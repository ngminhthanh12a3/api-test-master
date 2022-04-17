exports.mongooseOptions = require("./mongodb").mongooseOptions;
exports.MONGO_URL = require("./mongodb").MONGO_URL;

const { loadDeviceInfoFromDB } = require("../handler");
const { DeviceInfo } = require("../models");
exports.chacha20DecryptValue = {};
