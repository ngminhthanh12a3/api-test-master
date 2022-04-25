import { PageHeader, Tabs, Button } from "antd";
import { Link } from "react-router-dom";
import { AuthStatus } from "../../../AuthProvider";
import { signinPath, signupPath } from "../../../paths";

const MyHeader = () => {
  return (
    <PageHeader
      className="site-page-header-responsive"
      title="ADMIN DASHBOARD"
      extra={AuthStatus()}
    ></PageHeader>
  );
};

export default MyHeader;
