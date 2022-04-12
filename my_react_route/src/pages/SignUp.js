import { useState } from "react";
import { API_SIGNUP_URL } from "../constants";
import signUpInit from "../apiInit";

const SignUp = () => {
  const [messageState, setMessageState] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    // fetapi to signup
    fetch(
      API_SIGNUP_URL,
      signUpInit({
        method: "POST",
        body: { username: username, password: password },
        credentials: "include",
      })
    ) // get response json
      .then((res) => {
        // get json
        return res.json();
      })
      // test response object
      .then((res) => {
        // Signup Error
        if (res.err) throw new Error(res.err);

        setMessageState(res.msg);
      })
      .catch((err) => {
        console.log(err);
        setMessageState(err.toString());
      });
  };
  return (
    <>
      <h1>Signup Page</h1>
      {messageState && <p style={{ color: "red" }}>{messageState}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" required />
        <br></br>
        <label htmlFor="pwd">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <br />
        <input type="submit" value="Signup"></input>
      </form>
    </>
  );
};

export default SignUp;
