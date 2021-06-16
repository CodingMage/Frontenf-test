import AllAdmin from "../../../component/shared/allAdmin";
import Layout from "../../../component/shared/Layout";
import { useRouter } from "next/router";
import { parseCookies } from "../../../Helper";
import { API_URL } from "../../../config/index";

import axios from "axios";

function index({ admins, token }) {
  return (
    <div>
      <Layout
        msg="Dashboard   /   All Admin"
        route="All Admin"
        main={<AllAdmin adminData={admins.admins} access_token={token} />}
      />
    </div>
  );
}

export default index;

export async function getServerSideProps({ req, res }) {
  const { data } = parseCookies(req);

  if (res) {
    if (data === undefined) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }
  let token = JSON.parse(data).access_token;

  const resp = await fetch(`${API_URL}/api/v1/admins`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const admins = await resp.json();

  return {
    props: {
      admins,
      token,
    },
  };
}
