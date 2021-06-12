import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import React from "react";
import SignIn from "../component/shared/signin";

function Login(data) {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default Login;
