import { message } from "antd";

const ThrowMesssage = (messageState) => {
  const { success, err } = messageState;
  if (success) {
    message.success(success);
    return <></>;
  }
  //   if error
  if (err) {
    message.error(err);
  }
  return <></>;
};

export default ThrowMesssage;
