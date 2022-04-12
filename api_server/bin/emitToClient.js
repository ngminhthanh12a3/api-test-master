const { http } = require("./www");
const io = require("socket.io")(http);

module.exports = (data) => {
  console.log("Emitted");
  io.emit("encryptDT", data);
};
