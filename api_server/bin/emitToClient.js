const { server } = require("./www");
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "htts://localhost:3000",
    credentials: true,
  },
});
exports.listenToClientSocket = () => {
  io.on("connection", () => console.log("Socket Client connect"));
};
exports.emitToClient = (data) => {
  io.emit("encryptDT", data);
};
