import React from "react";
import { Menu, Dropdown, message } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { API_SIGNOUT_URL } from "../../constants";
import signOutInit from "../../apiInit";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import { signinPath } from "../../paths";

const AvatarDropdown = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  function handleMenuClick(e) {
    // fetch to signout api
    fetch(API_SIGNOUT_URL, signOutInit({ method: "POST" }))
      .then((res) => res.json())
      .then(() =>
        auth.signout(() => {
          message.success("Signout success");
          navigate(signinPath);
        })
      )
      .catch((error) => {
        message.error("Signout Faild");
        console.log(error);
      });
  }
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Signout",
          key: "Signout",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  return (
    <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
      {auth.user}
    </Dropdown.Button>
  );
};

export default AvatarDropdown;
