const { default: Layout } = require("../../component/shared/Layout");
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import { parseCookies } from "../../Helper";

function dashboard(user) {
  return (
    <div>
      <Layout
        route="Dashboard"
        msg={`Welcome ${user.user.name}`}
        main={<div className="main__content">Dashboard, It Works!</div>}
        name={user.user.name}
        role={user.user.role}
      />
    </div>
  );
}

export default dashboard;

// dashboard.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req);

//   if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       res.writeHead(301, { Location: "/" });
//       res.end();
//     }
//   }

//   return {
//     data: data && data,
//   };
// };

export async function getServerSideProps({ req, res }) {
  const { data } = parseCookies(req);

  if (res) {
    if (data === undefined) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }
  let user = JSON.parse(data).user;

  return {
    props: {
      user,
    },
  };
}
