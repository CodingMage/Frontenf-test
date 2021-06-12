import ManageSingleAdmin from "../../../../../component/shared/manageSingleAdmin";

const { default: Layout } = require("../../../../../component/shared/Layout");
import { useRouter } from "next/router";
import { parseCookies } from "../../../../../Helper";
import axios from "axios";

function Msa(data) {
  return (
    <div>
      <Layout
        route="Manage Single Admin"
        msg="Dashboard   /   Manage Single Admin"
        main={<ManageSingleAdmin singleAdminData={data} />}
      />
    </div>
  );
}

export default Msa;

Msa.getInitialProps = async ({ req, res, query }) => {
  const data = parseCookies(req);
  const { id } = query;

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  let sdata = JSON.parse(data.user);

  const config = {
    headers: { Authorization: `Bearer ${sdata.access_token}` },
  };

  let resp = await axios.get(
    `https://xchangeapp-api.herokuapp.com/api/v1/admins/${id}`,

    config
  );

  return {
    data: resp.data,
  };
};
