import React from "react";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="login__header">Admin</div>

        <div className="login__sub-header">
          Sign in to your account to continue
        </div>
        <div className="input__contain">
          <div className="input">
            <div className="input__label">Email address</div>
            <div className="input__input">
              <input type="email" />
            </div>
          </div>

          <div className="input">
            <div className="input__label">Email address</div>
            <div className="input__input">
              <input type="email" />
            </div>
          </div>
          <div className="btn__contain">
            <div className="signin__btn">
              <button>sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
