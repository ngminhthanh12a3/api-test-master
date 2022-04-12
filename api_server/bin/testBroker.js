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

const topic = "home/bedroom/fan"; //"/nodejs/mqtt";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = () => {
  console.log(process.env.BROKER_HOST);
  client.on("connect", () => {
    console.log("Connected");
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`);
    });
    // check mqtt
    setInterval(() => {
      client.publish(
        topic,
        getRndInteger(1, 100).toString(10),
        { qos: 0, retain: false },
        (error) => {
          if (error) {
            console.error(error);
          }
        }
      );
    }, 2000);
  });
  client.on("message", (topic, payload) => {
    console.log("Received Message:", topic, payload.toString());
  });
};
