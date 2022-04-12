import { useNavigate, Link } from "react-router-dom";
import useAuth from "./useAuth";
import { signinPath, signupPath } from "../paths";
import { API_SIGNOUT_URL } from "../constants";
import signOutInit from "../apiInit";

const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const handleSignout = () => {
    // fetch to signout api
    fetch(API_SIGNOUT_URL, signOutInit({ method: "POST" }))
      .then((res) => res.json())
      .then((res) => auth.signout(() => navigate(signinPath)))
      .catch((error) => console.log(error));
  };
  if (!auth.user) {
    return (
      <div>
        <p>You are not logged in. </p>
        <nav>
          <Link to={signinPath}>Signin</Link> |{" "}
          <Link to={signupPath}>Signup</Link>
        </nav>
      </div>
    );
  }

  return (
    <p>
      Welcome {auth.user}! <button onClick={handleSignout}>Sign out</button>
    </p>
  );
};

export default AuthStatus;
