import ManageSingleAdmin from "../../../../../component/shared/manageSingleAdmin";
import { API_URL } from "../../../../../config/index";

const { default: Layout } = require("../../../../../component/shared/Layout");
import { parseCookies } from "../../../../../Helper";

function Msa(singleAdmin) {
  return (
    <div>
      <Layout
        route="Manage Single Admin"
        msg="Dashboard   /   Manage Single Admin"
        main={<ManageSingleAdmin singleAdminData={singleAdmin} />}
      />
    </div>
  );
}

export default Msa;

export async function getServerSideProps({ req, res, query }) {
  const { data } = parseCookies(req);
  const { id } = query;

  if (res) {
    if (data === undefined) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  let token = JSON.parse(data).access_token;

  const resp = await fetch(`${API_URL}/api/v1/admins/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const singleAdmin = await resp.json();

  return {
    props: {
      singleAdmin,
    },
  };
}
