import React from "react";
import AllAdmin from "../../../component/shared/allAdmin";
import Layout from "../../../component/shared/Layout";

function index() {
  return (
    <div>
      <Layout
        msg="Dashboard   /   All Admin"
        route="All Admin"
        main={<AllAdmin />}
      />
    </div>
  );
}

export default index;
