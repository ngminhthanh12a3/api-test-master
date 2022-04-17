#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
var debug = require("debug")("api-server:server");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
exports.server = server;

// connect to mongodb
var { connectToMongo } = require("./mongoDB");
connectToMongo();

const { loadDeviceInfoFromDB } = require("../handler");
const { DeviceInfo } = require("../models");
const { chacha20DecryptValue } = require("../constants");
loadDeviceInfoFromDB(DeviceInfo, chacha20DecryptValue);

// listen to mqtt
var listenToMQTT = require("./listenToMQTT");
listenToMQTT();

var connectSocketClient = require("./connectSocketClient");
connectSocketClient();

var { listenToClientSocket } = require("./emitToClient");
listenToClientSocket();
/**
 * Listen on provided port, on all network interfaces.
 */
// exports.io = require("socket.io").Namespace.;

server.listen(port, () => console.log(`Server listening on port ${port}`));
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

// io.
