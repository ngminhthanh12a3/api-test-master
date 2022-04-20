import { useEffect } from "react";
import { io } from "socket.io-client";
import { API_URL, DEVICE_INFO_URL } from "../../constants";
import { fetchToDeviceInfo } from "../../handlers";

const socket = io(API_URL, { withCredentials: true });

const DeviceInfomation = () => {
  // listen to mqtt data come
  useEffect(() => {
    socket.on("encryptDT", (message) => console.log(message));
  }, []);

  // fetchToDeviceInfo(setDeviceInfo, DEVICE_INFO_URL, FETCH_TO_DEVICE_INFO_INIT);
  return <></>;
};

export default DeviceInfomation;
