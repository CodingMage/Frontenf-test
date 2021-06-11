import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import React from "react";
import SignIn from "../component/shared/signin";
// import { useCookies } from "react-cookie"

function Login(data) {
  // const [cookie, setCookie] = useCookies(["user"])
  console.log(data);
  function addDetails(gottenData) {
    console.log("name", gottenData);
  }
  return (
    <div>
      <SignIn onAddDetails={addDetails} />
    </div>
  );
}

export default Login;
