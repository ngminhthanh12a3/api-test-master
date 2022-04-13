var { server } = require("./www");
var io = require("socket.io")(server);

module.exports = (data) => {
  // test emit
  //   console.log("Emitted");
  io.emit("encryptDT", data);
};
