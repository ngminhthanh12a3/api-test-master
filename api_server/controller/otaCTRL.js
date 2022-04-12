var path = require("path");

var binPATH = path.join(process.cwd(), "binOTA/sketchVNPT.ino.esp32.bin");
module.exports = (req, res, next) => {
  if (req.query["u"]) res.download(binPATH);
};
