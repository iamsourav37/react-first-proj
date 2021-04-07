import React from "react";

function LoginForm() {
  return (
    <>
      <form className="login-form" action="#">
        Email :
        <input type="email" placeholder="example@example.com" required="true" />
        <br />
        Password : <input type="password" placeholder="123456" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
