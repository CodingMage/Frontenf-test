import AdminForm from "../../../component/shared/adminForm.js";
import Layout from "../../../component/shared/Layout.js";
import { parseCookies } from "../../../Helper";

function Createadmin(data) {
  return (
    <div>
      <Layout
        route="Create Admin"
        msg="Dashboard   /   All Admin    /   Create Admin"
        main={<AdminForm token={data} />}
      />
    </div>
  );
}

export default Createadmin;

Createadmin.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  let sdata = JSON.parse(data.user);
  let access_token = sdata.access_token;

  return {
    data: access_token,
  };
};
