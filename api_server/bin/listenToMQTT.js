const mqtt = require("mqtt");

const host = process.env.BROKER_HOST || "localhost";
const port = process.env.BROKER_PORT || "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "username",
  password: "password",
  reconnectPeriod: 1000,
});

const topic = "esp/publish";

module.exports = () => {
  client.on("connect", () => {
    console.log("Connected");
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`);
    });
    //   client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
    //     if (error) {
    //       console.error(error)
    //     }
    //   })
  });
  var { emitToClient } = require("./emitToClient");
  var { chacha20DecryptHandler, handleDecryptValue } = require("../handler");
  const { chacha20DecryptValue } = require("../constants");
  client.on("message", (topic, payload) => {
    const decryptJSON = chacha20DecryptHandler(payload, "1");
    handleDecryptValue(decryptJSON);

    // emit to clients
    emitToClient(chacha20DecryptValue); //
  });
};
