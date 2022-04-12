const { io } = require("./www.js");

module.exports = (data) => {
  // test emit
  //   console.log("Emitted");
  io.emit("encryptDT", data);
};
