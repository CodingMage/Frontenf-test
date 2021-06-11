const { default: Layout } = require("../../component/shared/Layout");

import axios from "axios";

import { useState, useContext, useEffect } from "react";
// import { Context } from "../../context/index";
import { parseCookies } from "../../Helper";
import { useRouter } from "next/router";
import axiosConfig from "../../helpers/axiosConfig";

function dashboard(data) {
  const router = useRouter();

  let user = JSON.parse(data.data.user).user;
  return (
    <div>
      <Layout
        route="Dashboard"
        msg={`Welcome ${user.name}`}
        main={<div className="main__content">Dashboard, It Works!</div>}
        name={user.name}
        role={user.role}
      />
    </div>
  );
}

export default dashboard;

dashboard.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
