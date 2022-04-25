import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { protectedPath, signinPath } from "../../paths";
import { API_SIGNIN_URL, API_CHECK_SIGNIN_URL } from "../../constants";
import { signInInit } from "../../apiInit";
import SignInForm from "./SignInForm";
import { ThrowMesssage } from "../../components";

const SignIn = () => {
  const [messageState, setMessageState] = useState({});

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || protectedPath;

  // get signin status. When first load signin page.
  useEffect(() => {
    // const username =
    fetch(API_CHECK_SIGNIN_URL, signInInit({}))
      .then((res) => res.json())
      .then((res) => res.username)
      .then((username) => {
        if (username)
          // signin.
          auth.signin(username, () => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, []);
  const onFinish = async (values) => {
    const { username, password } = values;

    // fetch api to signin
    fetch(
      API_SIGNIN_URL,
      signInInit({
        body: {
          username: username,
          password: password,
        },
      })
    )
      // get response json
      .then((res) => res.json())
      // test response object
      .then((res) => {
        if (res.err) {
          throw new Error(res.err);
        }

        setMessageState({ success: res.msg });

        // signin.
        auth.signin(username, () => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
        setMessageState({ err: err.toString() });
      });
  };

  if (auth.user)
    // Redirect to Protected Page.
    return <Navigate to={protectedPath} state={{ from: location }} replace />;

  return (
    <div>
      <h1>Signin Page</h1>

      {/* Warning if go to ptotected page */}
      {from !== signinPath && <p>You must log in to view the page at {from}</p>}
      {messageState && ThrowMesssage(messageState)}

      <SignInForm onFinish={onFinish} />
    </div>
  );
};
export default SignIn;
