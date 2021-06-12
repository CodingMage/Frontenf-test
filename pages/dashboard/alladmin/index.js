import AllAdmin from "../../../component/shared/allAdmin";
import Layout from "../../../component/shared/Layout";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../context/index";
import { useRouter } from "next/router";
import { parseCookies } from "../../../Helper";
import axios from "axios";

function index(data) {
  const router = useRouter();
  let adminData = data.data.data.admins;
  let access_token = data.data.accessToken;
  return (
    <div>
      <Layout
        msg="Dashboard   /   All Admin"
        route="All Admin"
        main={<AllAdmin adminData={adminData} access_token={access_token} />}
      />
    </div>
  );
}

export default index;

index.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  let sdata = JSON.parse(data.user);
  console.log("acctoken", sdata.access_token);

  const config = {
    headers: { Authorization: `Bearer ${sdata.access_token}` },
  };

  let resp = await axios.get(
    "https://xchangeapp-api.herokuapp.com/api/v1/admins",

    config
  );
  let mydata = {
    accessToken: sdata.access_token,
    data: resp.data,
  };
  console.log(mydata);

  return {
    data: mydata,
  };
};
