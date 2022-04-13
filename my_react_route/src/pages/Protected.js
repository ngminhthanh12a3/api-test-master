import { useEffect } from "react";
import io from "socket.io-client";
import { API_URL } from "../constants";
let socket = io(API_URL, {
  transports: ["websocket", "polling", "flashsocket"],
});
const Protected = () => {
  useEffect(() => {
    socket.on("encryptDT", (message) => console.log(message));
  }, []);
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
};

export default Protected;
