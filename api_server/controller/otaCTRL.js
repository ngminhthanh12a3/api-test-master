var path = require("path");

var binPATH = path.join(process.cwd(), "binOTA/sketchVNPT.ino.esp32.bin");
module.exports = (req, res, next) => {
  // enable test ota
  if (req.query["u"]) res.download(binPATH);
  else {
    res.writeHead(400);
    res.end("Fail");
  }
};
