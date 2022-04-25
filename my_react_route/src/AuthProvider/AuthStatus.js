import { Link } from "react-router-dom";
import useAuth from "./useAuth";
import { signinPath, signupPath } from "../paths";
import { Button } from "antd";
import { AvatarDropdown } from "../components";

const AuthStatus = () => {
  let auth = useAuth();

  if (!auth.user) {
    return [
      <Button key="Signin" type="primary">
        <Link style={{ textDecoration: "none" }} to={signinPath}>
          Signin
        </Link>
      </Button>,
      <Button key="Signup">
        <Link style={{ textDecoration: "none" }} to={signupPath}>
          Signup
        </Link>
      </Button>,
    ];
  }

  return <AvatarDropdown />;
};

export default AuthStatus;
