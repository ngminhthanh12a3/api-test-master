var path = require("path");

module.exports = (req, res, next) => {
  var binPATH = path.join(process.cwd(), "binOTA/sketchVNPT.ino.esp32.bin");
  res.download(binPATH);
};
