import React from "react";
import { Layout } from "antd";
import { MyHeader } from "./MyHeader";
import "./index.css";
import { AuthStatus } from "../../AuthProvider";

const { Content } = Layout;

export default ({ children }) => (
  <Layout>
    <MyHeader />
    <Content>
      <div className="site-layout-content">{children}</div>
    </Content>
  </Layout>
);
