import ManageSingleAdmin from "../../component/shared/manageSingleAdmin";

const { default: Layout } = require("../../component/shared/Layout");

function Msa() {
  return (
    <div>
      <Layout
        route="Manage Single Admin"
        msg="Dashboard   /   Manage Single Admin"
        main={<ManageSingleAdmin />}
      />
    </div>
  );
}

export default Msa;
